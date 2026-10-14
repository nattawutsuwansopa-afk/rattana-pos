Rattana POS v6.18.60 - Stability Pack

เพิ่ม 4 ส่วน:
1) Sync Status ชัดเจนบนแถบด้านบน
   - 🟢 ซิงก์แล้ว + เวลา
   - 🟡 กำลังซิงก์ / มีรายการรอส่ง
   - 🔴 ออฟไลน์ / ซิงก์ผิดพลาด
   - กดสถานะเพื่อสั่ง Sync ทันที

2) Auto Lock
   - ค่าเริ่มต้น 10 นาที
   - เลือก 5 / 10 / 15 / 30 นาที หรือปิด
   - ล็อกกลับหน้า PIN โดยไม่ Logout Supabase
   - ไม่ล้างตะกร้าขาย

4) Audit Log แข็งแรงขึ้น
   - แก้สินค้า: ราคาเดิม -> ใหม่, ทุน, บาร์โค้ด, หมวด, ภาษี
   - ปรับสต็อก: ประเภท, จำนวน, ก่อน -> หลัง, เหตุผล
   - คืนสินค้า: เลขคืน, เลขบิล, ยอดคืน, รายการสินค้า
   - ยกเลิกบิล: ยอด + รายการคืนสต็อก
   - ลบสินค้า: บาร์โค้ด, ราคา, ทุน, สต็อก
   - บันทึก Auto Lock, Sync Error, Health Check

5) Owner System Health
   - ตรวจ Internet / Supabase / Sync / Local / Backup / Storage / HTTPS / Camera API / Print / Drawer / Auto Lock / PWA
   - ปุ่ม “ตรวจทั้งหมดตอนนี้”
   - เมนูนี้แสดงสำหรับ Owner

ติดตั้ง:
1. อัป index.html ทับ index.html เดิมใน GitHub repo
2. รอ GitHub Pages 1-2 นาที
3. เปิด https://nattawutsuwansopa-afk.github.io/rattana-pos/?v=61860
4. กด Ctrl+Shift+R หนึ่งครั้ง
5. ไม่ต้องรัน SQL เพิ่ม

หมายเหตุ:
- ยังอยู่ในช่วงทดลองใช้ภายในร้าน
- Auto Lock ไม่ล้างตะกร้าและไม่ตัดการเชื่อม Supabase
