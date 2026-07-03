"use client";

import { useState, useEffect } from 'react';
import { resumeData } from '@/src/data/resumeData';

export default function AdminPage() {
  const [data, setData] = useState(JSON.stringify(resumeData, null, 2));
  const [status, setStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSave = async () => {
    try {
      setStatus('saving');
      
      // Parse to ensure valid JSON before saving
      const parsedData = JSON.parse(data);
      
      const res = await fetch('/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedData),
      });

      const result = await res.json();
      
      if (!res.ok) {
        throw new Error(result.error || 'Failed to save');
      }

      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Invalid JSON format or server error');
    }
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h1 className="h3 fw-bold">ระบบจัดการข้อมูล (Data Editor)</h1>
          <p className="text-muted">แก้ไขข้อมูลโครงสร้าง JSON ในกล่องด้านล่างแล้วกด "บันทึกข้อมูล"</p>
        </div>
        <a href="/" className="btn btn-outline-secondary rounded-pill">กลับหน้าหลัก</a>
      </div>

      {status === 'success' && (
        <div className="alert alert-success">บันทึกข้อมูลสำเร็จ! หน้าเว็บอัปเดตแล้วครับ</div>
      )}
      
      {status === 'error' && (
        <div className="alert alert-danger"><strong>Error:</strong> {errorMessage}</div>
      )}

      <div className="card shadow-sm border-0 rounded-4">
        <div className="card-body p-0">
          <textarea
            className="form-control border-0 font-monospace p-4"
            style={{ height: '70vh', fontSize: '14px', backgroundColor: '#f8f9fa' }}
            value={data}
            onChange={(e) => setData(e.target.value)}
            spellCheck="false"
          />
        </div>
        <div className="card-footer bg-white p-4 text-end rounded-bottom-4">
          <button 
            className="btn btn-primary px-4 fw-bold rounded-pill shadow-sm"
            onClick={handleSave}
            disabled={status === 'saving'}
          >
            {status === 'saving' ? 'กำลังบันทึก...' : '💾 บันทึกข้อมูล (Save)'}
          </button>
        </div>
      </div>
    </div>
  );
}
