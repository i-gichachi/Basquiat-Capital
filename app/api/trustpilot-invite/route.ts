
import { NextResponse } from 'next/server';
import { generateTrustpilotInviteLink, sendTrustpilotInvite } from '@/lib/trustpilot';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, name, referenceId, method } = body;

        if (!email || !name || !referenceId) {
            return NextResponse.json(
                { success: false, message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Check for an API secret or simple auth mechanism if needed, 
        // but for this internal tool we might rely on obscurity or basic auth later.

        let result;
        if (method === 'email') {
            result = await sendTrustpilotInvite(email, name, referenceId);
        } else {
            result = await generateTrustpilotInviteLink(email, name, referenceId);
        }

        return NextResponse.json(result);

    } catch (error) {
        console.error('Error processing Trustpilot invite:', error);
        return NextResponse.json(
            { success: false, message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
