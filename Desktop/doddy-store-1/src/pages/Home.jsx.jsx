import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Doddy Store</div>
        <div className="flex gap-2 items-center">
          <Input type="text" placeholder="Search / البحث" className="w-60" />
          <Button variant="outline">
            <Globe className="w-4 h-4 mr-1" /> EN / ع
          </Button>
        </div>
      </header>

      {/* Banner */}
      <div className="bg-gradient-to-r from-orange-200 to-yellow-100 p-6 text-center">
        <h2 className="text-xl font-semibold">
          Welcome to Doddy Store – مرحبا بك في متجر دودي
        </h2>
        <p className="text-sm text-gray-700">
          Discover thousands of products at low prices – اكتشف آلاف المنتجات بأسعار منخفضة
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 p-4">
        {[
          "ملابس / Clothing",
          "إكسسوارات / Accessories",
          "المنزل / Home",
          "هواتف / Phones",
          "الجمال / Beauty",
          "مطبخ / Kitchen"
        ].map((category, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow text-center hover:shadow-md transition"
          >
            {category}
          </div>
        ))}
      </div>

      {/* Featured Products */}
      <div className="px-4 py-6">
        <h3 className="text-xl font-semibold mb-4">
          منتجات مميزة / Featured Products
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow hover:shadow-md transition p-2"
            >
              <div className="bg-gray-200 h-40 mb-2 rounded"></div>
              <p className="text-sm">
                اسم المنتج / Product name {id}
              </p>
              <p className="font-bold text-lg text-orange-600">
                $19.99
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
mport { useTranslation } from 'react-i18next';

function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="text-center p-10">
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>

      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('ar')}>العربية</button>
    </div>
  );
}