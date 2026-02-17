"use client";

import { useState } from "react";
import { Send, Copy, CheckCircle2, AlertCircle } from "lucide-react";

export default function InviteReviewPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        referenceId: "",
        method: "link" // 'link' or 'email'
    });
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: "" });
    const [inviteLink, setInviteLink] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, message: "" });
        setInviteLink("");

        try {
            const res = await fetch("/api/trustpilot-invite", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setStatus({ type: "success", message: data.message });
                if (data.inviteLink) {
                    setInviteLink(data.inviteLink);
                }
                // Reset form if success
                if (formData.method === 'email') {
                    setFormData({ ...formData, name: "", email: "", referenceId: "" });
                }
            } else {
                setStatus({ type: "error", message: data.message || "Failed to generate invite." });
            }
        } catch (error) {
            setStatus({ type: "error", message: "An error occurred. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = () => {
        if (inviteLink) {
            navigator.clipboard.writeText(inviteLink);
            alert("Copied to clipboard!");
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-2xl mx-auto px-6">
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                    <h1 className="text-2xl font-light text-basquiat-black mb-2">Trustpilot Invitation Generator</h1>
                    <p className="text-sm text-gray-500 mb-8">Generate review invitations for clients after successful engagements.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Client Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-basquiat-blue transition-colors"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Reference ID</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. INV-2024-001"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-basquiat-blue transition-colors"
                                    value={formData.referenceId}
                                    onChange={(e) => setFormData({ ...formData, referenceId: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Client Email</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-basquiat-blue transition-colors"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-600">Method</label>
                            <div className="flex items-center gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="method"
                                        value="link"
                                        checked={formData.method === 'link'}
                                        onChange={() => setFormData({ ...formData, method: 'link' })}
                                        className="text-basquiat-blue focus:ring-basquiat-blue"
                                    />
                                    <span className="text-sm">Generate Link Only</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="method"
                                        value="email"
                                        checked={formData.method === 'email'}
                                        onChange={() => setFormData({ ...formData, method: 'email' })}
                                        className="text-basquiat-blue focus:ring-basquiat-blue"
                                    />
                                    <span className="text-sm">Send Email via API</span>
                                </label>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-basquiat-black text-white font-medium hover:bg-basquiat-blue transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {loading ? "Processing..." : (
                                    <>
                                        Generate Invitation <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    {status.message && (
                        <div className={`mt-8 p-4 rounded-sm flex items-start gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                            {status.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" /> : <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />}
                            <div>
                                <p className="font-medium">{status.message}</p>
                                {inviteLink && (
                                    <div className="mt-3 flex items-center gap-2">
                                        <code className="bg-white px-3 py-2 rounded border border-gray-200 text-xs text-gray-600 break-all">{inviteLink}</code>
                                        <button onClick={copyToClipboard} className="p-2 hover:bg-gray-100 rounded transition-colors" title="Copy">
                                            <Copy className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
