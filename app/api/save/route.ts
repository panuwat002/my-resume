import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Check if we are in development mode (can write to file system)
    if (process.env.NODE_ENV !== 'development') {
      return NextResponse.json(
        { error: 'Editing is only allowed in local development mode.' },
        { status: 403 }
      );
    }

    // Path to the resumeData.ts file
    const filePath = path.join(process.cwd(), 'src', 'data', 'resumeData.ts');
    
    // Format the file content
    const fileContent = `export const resumeData = ${JSON.stringify(data, null, 2)};\n`;
    
    // Write the new content to the file
    fs.writeFileSync(filePath, fileContent, 'utf8');
    
    return NextResponse.json({ success: true, message: 'Data saved successfully!' });
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json(
      { error: 'Failed to save data.' },
      { status: 500 }
    );
  }
}
