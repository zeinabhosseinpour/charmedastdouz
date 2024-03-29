import React from "react";
const productslist = [
  {
    id: 1,
    title: "کیف های چرمی",
    slug: "کیف_های_چرمی",
    child: [
      {
        id: 11,
        title: "کیف مجلسی زنانه",
        slug: "کیف_مجلسی_زنانه",
        slugd: "کیف_مجلسی_زنانه_کد_100",
        category: "کیف_چرمی",
        href: "./Content.js",
        type: 0,
        child: [
          {
            id: 111,
            category: "کیف_چرمی",
            parent1: "کیف_مجلسی_زنانه",
            parent: 1,
            title: "کیف مجلسی زنانه کد100",
            slug: "کیف_مجلسی_زنانه_کد_100",
            price: "1500000",
            off: "15%",
            priceoff: "1200000",
            count: "5",
            material: "چرم گاوی",
            length: "25cm",
            height: "28cm",
            width: "10cm",
            insertdate: "1402/04/01",
            attributes: [
              { id: "1", color: "قرمز", colorcount: "3", img: "p1" },
              { id: "2", color: "مشکی", colorcount: "2", img: "p1" },
            ],
          },
          {
            id: 112,
            category: "کیف های چرمی",
            parent: "کیف_مجلسی_زنانه",
            title: " کیف مجلسی زنانه کد101",
            slug: "کیف_مجلسی_زنانه_کد_101",
            price: "800000",
            off: "5%",
            priceoff: "700000",
            count: "8",
            material: "چرم گاوی",
            img: "p1",
            attributes: [
              { title: "رنگ", value: "قرمز" },
              { title: "جنس", value: "چرم گاوی" },
              { title: "طول", value: "25cm" },
              { title: "ارتفاع", value: "28cm" },
              { title: "عرض", value: "10cm" },
            ],
          },
        ],
      },
      {
        id: 12,
        title: "کیف دوشی زنانه",
        slug: "کیف_دوشی_زنانه",
        category: "کیف_چرمی",
        href: "./Content.js",
        type: 0,
        child: [
          {
            id: 121,
            category: "کیف های چرمی",
            parent: "کیف_دوشی_زنانه",
            title: "کیف دوشی زنانه کد200",
            slug: "کیف_دوشی_زنانه_کد200",
            price: "1800000",
            off: "10%",
            priceoff: "1000000",
            count: "4",
            material: "چرم گاوی",
            img: "p1",
            attributes: [
              { title: "رنگ", value: "مشکی" },
              { title: "جنس", value: "چرم شتر" },
              { title: "طول", value: "27cm" },
              { title: "ارتفاع", value: "26cm" },
              { title: "عرض", value: "11cm" },
            ],
          },
        ],
      },
      {
        id: 13,
        title: "کیف دستی زنانه",
        slug: "کیف_دستی_زنانه",
        category: "کیف_چرمی",
        href: "./Content.js",
      },
      {
        id: 14,
        title: "کیف کج یکطرفه",
        slug: "کیف_کج_زنانه",
        category: "کیف_چرمی",
        href: "./Content.js",
      },
      {
        id: 15,
        title: "کوله پشتی",
        slug: "کوله_پشتی",
        category: "کیف_چرمی",
        href: "./Content.js",
      },
      {
        id: 16,
        title: "کیف پول کتی",
        slug: "کیف_پول_کتی",
        category: "کیف_چرمی",
        href: "./Content.js",
        type: 0,
        child: [
          {
            id: 161,
            category: "کیف های چرمی",
            parent: "کیف_پول_کتی",
            title: "کیف پول کتی کد300",
            slug: "کیف_پول_کتی_کد_300",
            price: "900000",
            off: "7%",
            priceoff: "700000",
            count: "6",
            material: "چرم گاوی",
            img: "p1",
            attributes: [
              { title: "رنگ", value: "سبز" },
              { title: "جنس", value: "چرم شتر" },
              { title: "طول", value: "10cm" },
              { title: "عرض", value: "10cm" },
            ],
          },
        ],
      },
      {
        id: 17,
        title: "کیف پول جیبی مردانه",
        slug: "کیف_پول_جیبی_مردانه",
        category: "کیف_چرمی",
        href: "./Content.js",
      },
    ],
  },

  {
    id: 2,
    title: "اکسسوری چرمی",
    slug: "اکسسوری_چرمی",
    category: "اکسسوری چرمی",
    child: [
      {
        id: 21,
        title: "قاب گوشی موبایل",
        slug: "قاب_گوشی_موبایل",
        category: "اکسسوری_چرمی",
        href: "./Content.js",
        type: 0,
        child: [
          {
            id: 211,
            category: "اکسسوری چرمی",
            parent: "قاب_گوشی_موبایل",
            title: "قاب گوشی موبایل کد_500",
            slug: "قاب_گوشی_موبایل_کد_500",
            price: "500000",
            off: "10%",
            priceoff: "400000",
            count: "8",
            material: "چرم گاوی",
            img: "p1",
            attributes: [
              { title: "رنگ", value: "سبز" },
              { title: "جنس", value: "چرم شترمرغ" },
              { title: "طول", value: "12cm" },
              { title: "عرض", value: "7cm" },
            ],
          },
        ],
      },
      {
        id: 22,
        title: "بند ساعت",
        slug: "بند_ساعت",
        category: "اکسسوری_چرمی",
        href: "./Content.js",
      },
      {
        id: 23,
        title: "کمربند چرمی",
        slug: "کمربند_چرمی",
        category: "اکسسوری_چرمی",
        href: "./Content.js",
        type: 0,
        child: [
          {
            id: 231,
            category: "اکسسوری_چرمی",
            parent: "کمربند_چرمی",
            title: " کمربند چرمی کد_400",
            slug: "کمربند_چرمی_کد_400",
            size: "120cm",
            price: "1500000",
            off: "15%",
            priceoff: "1200000",
            count: "8",
            material: "چرم گاوی",
            img: "p1",
            attributes: [
              { title: "رنگ", value: "قهوه ای" },
              { title: "جنس", value: "چرم گاوی" },
              { title: "طول", value: "25cm" },
              { title: "عرض", value: "10cm" },
            ],
          },
        ],
      },
      {
        id: 24,
        title: "پیش بند چرمی",
        slug: "پیش_بند_چرمی",
        category: "اکسسوری_چرمی",
        href: "./Content.js",
      },
      {
        id: 25,
        title: "گوشواره چرمی",
        slug: "گوشواره_چرمی",
        category: "اکسسوری_چرمی",
        href: "./Content.js",
      },
      {
        id: 26,
        title: "دستبند چرمی",
        slug: "دستبند_چرمی",
        category: "اکسسوری_چرمی",
        href: "./Content.js",
      },
      {
        id: 27,
        title: "کیف عینک",
        slug: "کیف_عینک",
        category: "اکسسوری_چرمی",
        href: "./Content.js",
      },
    ],
  },

  {
    id: 3,
    title: "کفش چرمی",
    slug: "کفش_چرمی",
    category: "کفش_چرمی",
    child: [
      {
        id: 31,
        title: "کفش زنانه",
        slug: "کفش_زنانه",
        category: "کفش_چرمی",
        child: [
          {
            id: 311,
            title: "صندل زنانه",
            slug: "صندل_زنانه",
            href: "./Content.js",

            child: [
              {
                id: 3111,
                category: "کفش چرمی",
                parent: "کفش_زنانه",
                title: "صندل زنانه کد600",
                slug: "صندل_زنانه_کد_600",
                size: "38",
                price: "700000",
                off: "20%",
                priceoff: "500000",
                count: "0",
                material: "چرم گاوی",
                img: "p1",
                attributes: [
                  { title: "رنگ", value: "سبز" },
                  { title: "جنس", value: "چرم شتر" },
                  { title: "طول", value: "10cm" },
                  { title: "عرض", value: "10cm" },
                ],
              },
            ],
          },
          {
            id: 312,
            title: "کفش مجلسی زنانه",
            slug: "کفش_مجلسی_زنانه",
            category: "کفش_چرمی",
            href: "./Content.js",
          },
          {
            id: 313,
            title: "کفش اسپرت زنانه",
            slug: "کفش_اسپرت_زنانه",
            category: "کفش_چرمی",
            href: "./Content.js",
          },
          {
            id: 314,
            title: "کفش بوت و نیم بوت",
            slug: "کفش_بوت_و_نیم_بوت_زنانه",
            category: "کفش_چرمی",
            href: "./Content.js",
          },
          {
            id: 315,
            title: "کفش کالج زنانه",
            slug: "کفش_کالج_زنانه",
            category: "کفش_چرمی",
            href: "./Content.js",
          },
        ],
      },

      {
        id: 32,
        title: "کفش مردانه",
        slug: "کفش_مردانه",
        category: "کفش_چرمی",
        child: [
          {
            id: 321,
            title: "صندل مردانه",
            slug: "صندل_مردانه",
            href: "./Content.js",
          },
          {
            id: 322,
            title: "کفش مجلسی مردانه",
            slug: "کفش_مجلسی_مردانه",
            category: "کفش_چرمی",
            href: "./Content.js",
          },
          {
            id: 323,
            title: "کفش اسپرت مردانه",
            slug: "کفش_اسپرت_مردانه",
            href: "./Content.js",
            type: 0,
            child: [
              {
                id: 3111,
                category: "کفش چرمی",
                parent: "کفش_مردانه",
                title: "کفش اسپرت مردانه کد600",
                slug: "کفش_اسپرت_مردانه_کد_600",
                size: "39",
                price: "800000",
                off: "20%",
                priceoff: "500000",
                count: "0",
                material: "چرم گاوی",
                img: "p1",
                attributes: [
                  { title: "رنگ", value: "سبز" },
                  { title: "جنس", value: "چرم شتر" },
                  { title: "طول", value: "10cm" },
                  { title: "عرض", value: "10cm" },
                ],
              },
            ],
          },
          {
            id: 324,
            title: "کفش بوت و نیم بوت",
            slug: "کفش_بوت_و_نیم_بوت_مردانه",
            href: "./Content.js",
          },
          {
            id: 325,
            title: "کفش کالج مردانه",
            slug: "کفش_کالج_مردانه",
            href: "./Content.js",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    title: "پوشاک چرمی",
    slug: "پوشاک_چرمی",
    child: [
      {
        id: 41,
        title: "دستکش چرمی",
        slug: "دستکش_چرمی",
        category: "پوشاک_چرمی",
        href: "./Content.js",
      },
      {
        id: 42,
        title: "لباس چرمی",
        slug: "لباس_چرمی",
        category: "پوشاک_چرمی",
        href: "./Content.js",
      },
      {
        id: 43,
        title: "کلاه چرمی",
        slug: "کلاه_چرمی",
        category: "پوشاک_چرمی",
        href: "./Content.js",
        type: 0,
        child: [
          {
            id: 431,
            category: "پوشاک چرمی",
            parent: "کلاه_چرمی",
            title: "کلاه چرمی کد700",
            slug: "کلاه_چرمی_کد_700",
            size: "xl",
            price: "300000",
            off: "15%",
            priceoff: "200000",
            count: "0",
            material: "چرم گاوی",
            img: "p1",
            attributes: [
              { title: "رنگ", value: "سبز" },
              { title: "جنس", value: "چرم شتر" },
              { title: "طول", value: "10cm" },
              { title: "عرض", value: "10cm" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 5,
    title: "دکوراسیون و منزل",
    slug: "دکوراسیون_و_منزل",
    child: [
      {
        id: 51,
        title: "تابلو چرمی",
        slug: "تابلو_چرمی",
        category: "دکوراسیون_و_منزل",
        href: "./Content.js",
      },
      {
        id: 52,
        title: "فرش چرمی",
        slug: "فرش_چرمی",
        category: "دکوراسیون_و_منزل",
        href: "./Content.js",
      },
      {
        id: 53,
        title: "کوسن چرمی",
        slug: "کوسن_چرمی",
        category: "دکوراسیون_و_منزل",
        href: "./Content.js",
        type: 0,
        child: [
          {
            id: 531,
            category: "دکوراسیون و منزل",
            parent: "کوسن_چرمی",
            title: "کوسن چرمی کد800",
            slug: "کوسن_چرمی_کد_800",
            price: "400000",
            off: "25%",
            priceoff: "300000",
            count: "1",
            material: "چرم گاوی",
            img: "p1",
            attributes: [
              { title: "رنگ", value: "سبز" },
              { title: "جنس", value: "چرم شترمرغ" },
              { title: "طول", value: "12cm" },
              { title: "عرض", value: "7cm" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 6,
    title: "محصولات بچگانه",
    slug: "محصولات_بچگانه",
    child: [
      {
        id: 61,
        title: "کوله پشتی بچگانه",
        slug: "کوله_پشتی_بچگانه",
        category: "محصولات_بچگانه",
        href: "./Content.js",
        type: 0,
        child: [
          {
            id: 611,
            category: "محصولات بچگانه",
            parent: "کوله_پشتی_بچگانه",
            title: "کوله پشتی بچگانه کد900",
            slug: "کوله_پشتی_بچگانه_کد_900",
            price: "900000",
            off: "15%",
            priceoff: "800000",
            count: "3",
            material: "چرم گاوی",
            img: "p1",
            attributes: [
              { title: "رنگ", value: "سبز" },
              { title: "جنس", value: "چرم شترمرغ" },
              { title: "طول", value: "12cm" },
              { title: "عرض", value: "7cm" },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 7,
    title: "چرم",
    slug: "چرم",
    child: [
      {
        id: 71,
        title: "چرم گاوی",
        slug: "چرم_گاوی",
        category: "چرم",

        child: [
          {
            id: 711,
            title: "چرم گاوی فلوتر",
            slug: "چرم_گاوی_فلوتر",
            category: "چرم",
            href: "./Content.js",

            child: [
              {
                id: 7111,
                category: "چرم",
                parent: "چرم_گاوی",
                title: "چرم گاوی فلوتر کد1000",
                slug: "چرم_گاوی_فلوتر_کد1000",
                size: "6foot",
                price: "60000",
                off: "15%",
                priceoff: "45000",
                count: "2",
                material: "چرم گاوی",
                img: "p1",
                attributes: [
                  { title: "رنگ", value: "سبز" },
                  { title: "جنس", value: "چرم شترمرغ" },
                  { title: "طول", value: "12cm" },
                  { title: "عرض", value: "7cm" },
                ],
              },
            ],
          },
          {
            id: 712,
            title: "چرم گاوی هورس",
            slug: "چرم_گاوی_هورس",
            category: "چرم",
            href: "./Content.js",
          },
          {
            id: 713,
            title: "چرم گاوی لزارد",
            slug: "چرم_گاوی_لزارد",
            category: "چرم",
            href: "./Content.js",
          },
        ],
      },

      {
        id: 72,
        title: "چرم بزی",
        slug: "چرم_بزی",
        category: "چرم",
        href: "./Content.js",
      },
      {
        id: 73,
        title: "چرم شتر",
        slug: "چرم_شتر",
        category: "چرم",
        href: "./Content.js",
      },
      {
        id: 74,
        title: "چرم مار پیتون",
        slug: "چرم__مار_پیتون",
        category: "چرم",
        href: "./Content.js",
      },
      {
        id: 75,
        title: "چرم شترمرغ",
        slug: "چرم_شترمرغ",
        category: "چرم",
        href: "./Content.js",
      },
    ],
  },
];

const Test = () => {
  const searchResult = [];

  // function recursiveFn(data, searchText) {
  //   data.map((item) => {
  //     const itemCopy = item;

  //     if (item.title.includes(searchText)) {
  //       delete itemCopy["child"];
  //       searchResult.push(itemCopy);
  //     }

  //     if (item.child) {
  //       return recursiveFn(item.child);
  //     }
  //   });
  // }

  // recursiveFn(productslist, "چرم");

  // console.log("searchResult : ", searchResult);

  function recursiveFn2(data, searchId) {
    data.map((item) => {
      const itemCopy = item;

      if (item.id === searchId) {
        // delete itemCopy["child"];
        searchResult.push(itemCopy);
      }

      if (item.child) {
        return recursiveFn2(item.child);
      }
    });
  }
  recursiveFn2(productslist, 3231);

  console.log("searchResult2 : ", searchResult);
};

export default Test;
