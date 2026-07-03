"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

function PdfViewer() {
  const searchParams = useSearchParams();
  const file = searchParams.get('file');

  useEffect(() => {
    // ป้องกันการคลิกขวา (Right Click)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // ป้องกันการกดปุ่มลัด (Ctrl+P, Ctrl+S)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 's')) {
        e.preventDefault();
        alert('ไม่อนุญาตให้พิมพ์หรือบันทึกไฟล์นี้ครับ');
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!file) return <div className="p-5 text-center text-white">No file specified</div>;

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', margin: 0, padding: 0, backgroundColor: '#333' }}>
      <style>{`
        /* ป้องกันการกด Ctrl+P หรือสั่ง Print จากเบราว์เซอร์ */
        @media print {
          body { display: none !important; }
        }
        /* ซ่อนทุกอย่างยกเว้นตัว Viewer ในหน้าจอปกติเพื่อความปลอดภัย */
        body { margin: 0; overflow: hidden; user-select: none; }
      `}</style>
      
      {/* ใช้ iframe แบบใส่ #toolbar=0 เพื่อซ่อนปุ่ม Download และ Print ของเบราว์เซอร์ */}
      <iframe 
        src={`/certs/${file}#toolbar=0&navpanes=0&scrollbar=0`}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Certificate Viewer"
      />
      
      {/* วางกล่องใสทับด้านบนสุดเพื่อป้องกันการคลิกขวาที่ตัว PDF โดยตรง (บางเบราว์เซอร์) */}
      <div 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, background: 'transparent' }}
        onContextMenu={(e) => e.preventDefault()}
      ></div>
    </div>
  );
}

export default function ViewerPage() {
  return (
    <Suspense fallback={<div className="p-5 text-center text-white">Loading Viewer...</div>}>
      <PdfViewer />
    </Suspense>
  );
}
