mport React from 'react';

export default function Home() {
  return (
    <div className="p-4 font-sans">
      <header className="bg-orange-500 text-white py-4 px-6 text-center text-xl font-bold shadow-md">
        دودى ستور - DODDY STORE
      </header>

      <nav className="flex justify-center gap-4 bg-orange-100 py-2 text-sm font-medium">
        <a href="#" className="hover:underline">الرئيسية</a>
        <a href="#" className="hover:underline">العروض</a>
        <a href="#" className="hover:underline">الأقسام</a>
        <a href="#" className="hover:underline">تواصل معنا</a>
      </nav>

      <main className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="border rounded p-2 shadow hover:shadow-lg transition">
            <img src="https://via.placeholder.com/150" alt="منتج" className="w-full rounded mb-2" />
            <h2 className="text-center text-sm font-semibold">منتج رقم {i + 1}</h2>
            <p className="text-center text-orange-600 font-bold mt-1">$ {10 + i}</p>
          </div>
        ))}
      </main>

      <footer className="text-center text-xs text-gray-500 mt-10">
        جميع الحقوق محفوظة © Doddy Store 2025
      </footer>
    </div>
  );
}