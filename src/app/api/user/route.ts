import {NextResponse} from 'next/server';
import {USER_WITH_ONE_SUBSCRIPTION} from '@/src/mocks/user';

export async function GET() {
 return NextResponse.json(USER_WITH_ONE_SUBSCRIPTION);
}