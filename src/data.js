const menu = [
  {
    id: 1,
    name: "Chin Chin",
    price: 1.99,
    type: "Starters",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678793/DadaKitchen/chin_chin_qrwnlp.jpg",
    description:
      "Made of fried dough containing flour, sugar, butter, and milk.",
  },
  {
    id: 2,
    name: "Puff Puff",
    price: 2.55,
    type: "Starters",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678798/DadaKitchen/puffpuff_p5fwyg.jpg",
    description: "Deep fried dough, served plain or with powdered sugar.",
  },
  {
    id: 3,
    name: "Meat Pie",
    price: 5.99,
    type: "Starters",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678796/DadaKitchen/meatpie_ktncga.jpg",
    description: "Buttery shortcrust pastry filled with mincemeat ",
  },
  {
    id: 4,
    name: "Scotch Egg",
    price: 2.55,
    type: "Starters",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678796/DadaKitchen/scotch_egg_qymrkd.jpg",
    description:
      "A Scotch egg is a whole soft or hard-boiled egg wrapped in sausage meat, coated in bread crumbs deep-fried.",
  },
  {
    id: 5,
    name: "Sachet Suya Beef",
    price: 11.0,
    type: "Starters",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678796/DadaKitchen/Sachet_Suya_Beef_tcz2yv.jpg",
    description: "Grilled beef skewers seasoned with spicy peanut mix.",
  },
  {
    id: 6,
    name: "Fried Fish (Hake)",
    price: 16.0,
    type: "Starters",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678794/DadaKitchen/Fried_Fish_Hake_ksgtmx.jpg",
    description:
      "Hake topped with a spicy sauce and pickled vegetable medley. ",
  },
  {
    id: 7,
    name: "Fresh Fish",
    price: 16.0,
    type: "Starters",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678793/DadaKitchen/Fresh_Fish_mtsnwf.jpg",
    description: "Fish topped with a spicy sauce and pickled vegetable medley.",
  },
  {
    id: 8,
    name: "Whole Grilled Fish",
    price: 20.0,
    type: "Starters",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678797/DadaKitchen/Whole_Grilled_Fish_f4aop9.jpg",
    description: "Whole fish seasoned with Nigerian spices grilled",
  },
  {
    id: 9,
    name: "Fish Pepper",
    price: 10.55,
    type: "Starters",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678794/DadaKitchen/Fish_Pepper_ix0mfs.jpg",
    description:
      "Light and spicy soup made with herbs and Nigerian spices with fish",
  },
  {
    id: 10,
    name: "Pepper Soup (Assorted Meat)",
    price: 10.55,
    type: "Starters",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678796/DadaKitchen/Pepper_Soup_Assorted_Meat_jfkywk.jpg",
    description:
      "Light and spicy soup made with herbs and Nigerian spices with meat",
  },
  {
    id: 11,
    name: "Fresh Suya(Beef)",
    price: 11.0,
    type: "Starters",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678794/DadaKitchen/Fresh_Suya_Beef_iiglnh.jpg",
    description: "Grilled beef skewers seasoned with spicy peanut mix.",
  },
  {
    id: 12,
    name: "Snails (each)",
    price: 8.0,
    type: "Starters",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678798/DadaKitchen/Snails_each_q4bbpy.jpg",
    description:
      "Nigerian peppered snails, sautéed with peppers, onions, and garlic",
  },
  {
    id: 13,
    name: "Stock Fish",
    price: 10.0,
    type: "Starters",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678797/DadaKitchen/Stock_Fish_pwxdft.jpg",
    description: "Savoury with a hint of sweetness, rich and very tasty.",
  },
  {
    id: 14,
    name: "Nkwobi",
    price: 13.55,
    type: "Starters",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678795/DadaKitchen/Nkwobi_yat7xk.jpg",
    description:
      "Cow foot mixed in spicy palm oil paste slow cooked with onion garnish",
  },
  {
    id: 15,
    name: "Big Ayamase Stew",
    price: 15.0,
    type: "Delicious Sides",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678793/DadaKitchen/Ayamase_Stew_lhxn7a.jpg",
    description:
      "Green bell peppers stew is simply our beloved Original Ayamase stew (Large)",
  },
  {
    id: 16,
    name: "Big Red Tomato Stew",
    price: 14.0,
    type: "Delicious Sides",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678797/DadaKitchen/Red_Tomato_Stew_mwq9qw.jpg",
    description:
      "A thick, hearty stew made with bell pepper, tomatoes onions, aromatics, and seasonings (Large)",
  },
  {
    id: 17,
    name: "Pepper Soup",
    price: 10.5,
    type: "Delicious Sides",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678796/DadaKitchen/Pepper_Soup_Assorted_Meat_jfkywk.jpg",
    description: "Light and spicy soup made with herbs and Nigerian spices",
  },
  {
    id: 18,
    name: "Fresh Beef Suya",
    price: 5.0,
    type: "Delicious Sides",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678794/DadaKitchen/Fresh_Suya_Beef_iiglnh.jpg",
    description: "Grilled beef skewers seasoned with spicy peanut mix.",
  },
  {
    id: 19,
    name: "Small Ayamase",
    price: 12.55,
    type: "Delicious Sides",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678793/DadaKitchen/Ayamase_Stew_lhxn7a.jpg",
    description:
      "Green bell peppers stew is simply our beloved Original Ayamase stew (Small)",
  },
  {
    id: 20,
    name: "Small Red Tomato Stew",
    price: 11.55,
    type: "Delicious Sides",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678797/DadaKitchen/Red_Tomato_Stew_mwq9qw.jpg",
    description:
      "A thick, hearty stew made with bell pepper, tomatoes onions, aromatics, and seasonings (Small)",
  },
  {
    id: 21,
    name: "Efo Elegusi Soup",
    price: 12.0,
    type: "Delicious Sides",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678793/DadaKitchen/Efo_Elegusi_Soup_vmas6a.jpg",
    description:
      "A stew usually made with crayfish or other meat and thickened with ground melon seeds",
  },
  {
    id: 22,
    name: "Ogbono Soup",
    price: 12.0,
    type: "Delicious Sides",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678795/DadaKitchen/Ogbono_Soup_deyutx.jpg",
    description:
      "Rich, nutrition-packed Nigerian soup made from ogbono seeds (ground African mango seeds) and palm oil",
  },
  {
    id: 23,
    name: "Okra Soup",
    price: 12.0,
    type: "Delicious Sides",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678795/DadaKitchen/Okra_Soup_ottldp.jpg",
    description: "Soup made with okra, spinach, and crayfish.",
  },
  {
    id: 24,
    name: "Efo-Riro",
    price: 12.0,
    type: "Delicious Sides",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678793/DadaKitchen/Efo-Riro_lor57t.jpg",
    description:
      "A rich spinach stew usually made with spinach, scotch bonnets, and red bell peppers.",
  },
  {
    id: 25,
    name: "Rice",
    price: 3.0,
    type: "Delicious Sides",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678794/DadaKitchen/jollof_rice_nuidvg.jpg",
    description:
      "Rice made with tomatoes, onions, scotch bonnets, and chili peppers.",
  },
  {
    id: 26,
    name: "Meat",
    price: 4.55,
    type: "Delicious Sides",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618681058/DadaKitchen/meat_bcuith.jpg",
    description:
      "A tomato-based beef stew served with rice or starchy vegetables.",
  },
  {
    id: 27,
    name: "Fish (Hake)",
    price: 4.0,
    type: "Delicious Sides",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678794/DadaKitchen/Fried_Fish_Hake_ksgtmx.jpg",
    description: "Fish topped with a spicy sauce and pickled vegetable medley.",
  },
  {
    id: 28,
    name: "Cowfoot",
    price: 6.0,
    type: "Delicious Sides",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678793/DadaKitchen/cowfoot_ao1ez7.jpg",
    description:
      "Cow foot mixed in spicy palm oil paste with mushrooms and butter beans",
  },
  {
    id: 29,
    name: "Extra Solid (Pounded Yam, Eba, Amala)",
    price: 3.0,
    type: "Delicious Sides",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678796/DadaKitchen/pounded_yam_pfoevn.jpg",
    description:
      "Delicious fillers made from pounded yam, garri, cassava or melon seed",
  },
  {
    id: 30,
    name: "Yam Pottage",
    price: 5.0,
    type: "Yam Dishes",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678797/DadaKitchen/yam_porridge_lqzlhl.jpg",
    description: "Yam dish cooked in a well-seasoned pepper mix ",
  },
  {
    id: 31,
    name: "Yam pottage with plaintain",
    price: 6.0,
    type: "Yam Dishes",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678797/DadaKitchen/yam_porridge_lqzlhl.jpg",
    description:
      "Yam dish cooked in a well-seasoned pepper mix served with plantain",
  },
  {
    id: 32,
    name: "Plain Beans",
    price: 3.0,
    type: "Bean Dishes",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678792/DadaKitchen/adaalu_ak25qf.jpg",
    description: "A mix of gungu peas, kidney beans and african beans stewed",
  },
  {
    id: 33,
    name: "Mixed Beans (adaalu)",
    price: 3.0,
    type: "Bean Dishes",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678792/DadaKitchen/adaalu_ak25qf.jpg",
    description:
      "Fusion of stewed gungu peas, kidney beans, african beans and Sweetcorn",
  },
  {
    id: 34,
    name: "Mixed Beans with Plantain",
    price: 4.0,
    type: "Bean Dishes",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678792/DadaKitchen/beans_and_plantain_focw2s.jpg",
    description:
      "Fusion of stewed gungu peas, kidney beans, african beans and Sweetcorn served with Plantain",
  },
  {
    id: 35,
    name: "Bean Cake (moi-moi)",
    price: 3.99,
    type: "Bean Dishes",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678794/DadaKitchen/moi_moi_bv9h7f.jpg",
    description:
      "A steamed bean cake made with blended black eyed peas, flaked fish, and often hard boiled eggs.",
  },
  {
    id: 36,
    name: "Bean Cake (traditional)",
    price: 4.0,
    type: "Bean Dishes",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678794/DadaKitchen/moi_moi_bv9h7f.jpg",
    description: "A steamed bean cake made with blended black eyed peas",
  },
  {
    id: 37,
    name: "Hot Stew",
    price: 3.0,
    type: "Aya-Mase Rice",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678797/DadaKitchen/Red_Tomato_Stew_mwq9qw.jpg",
    description:
      "Combination of Green colored peppers together with onions served with Hot Stew",
  },
  {
    id: 38,
    name: "Served with Plantain",
    price: 3.55,
    type: "Aya-Mase Rice",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678796/DadaKitchen/plantain_mjzxue.jpg",
    description:
      "Combination of Green colored peppers together with onions served with Plantain",
  },
  {
    id: 39,
    name: "Served with Beans",
    price: 4.0,
    type: "Aya-Mase Rice",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678792/DadaKitchen/adaalu_ak25qf.jpg",
    description:
      "Combination of Green colored peppers together with onions served with Beans",
  },
  {
    id: 40,
    name: "Served with Plantain & Beans",
    price: 5.0,
    type: "Aya-Mase Rice",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678792/DadaKitchen/beans_and_plantain_focw2s.jpg",
    description:
      "Combination of Green colored peppers together with onions served with Plantain & Beans",
  },
  {
    id: 41,
    name: "Rice",
    price: 3.0,
    type: "Fried Rice",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618680955/DadaKitchen/white_rice_ge4e2j.jpg",
    description: "Boiled basmati rice to accompany any stew",
  },
  {
    id: 42,
    name: "Served with Plantain",
    price: 4.0,
    type: "Fried Rice",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678796/DadaKitchen/plantain_mjzxue.jpg",
    description: "Rice fried with vegetables served with plantain",
  },
  {
    id: 43,
    name: "Served with Beans",
    price: 6.0,
    type: "Fried Rice",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678792/DadaKitchen/adaalu_ak25qf.jpg",
    description: "Rice fried with vegetables served with Beans",
  },
  {
    id: 44,
    name: "Served with Beans & Plantain",
    price: 6.99,
    type: "Fried Rice",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678792/DadaKitchen/beans_and_plantain_focw2s.jpg",
    description: "Rice fried with vegetables served with Beans and Plantain",
  },
  {
    id: 45,
    name: "Yam Porridge",
    price: 12.0,
    type: "Main Course",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678797/DadaKitchen/yam_porridge_lqzlhl.jpg",
    description: "Yam dish cooked in a well-seasoned pepper mix ",
  },
  {
    id: 46,
    name: "Beans and Yam Porridge",
    price: 12.0,
    type: "Main Course",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678797/DadaKitchen/yam_porridge_lqzlhl.jpg",
    description:
      "Yam dish cooked in a well-seasoned pepper mixserved with Beans",
  },
  {
    id: 47,
    name: "Mashed Beans",
    price: 12.0,
    type: "Main Course",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678792/DadaKitchen/adaalu_ak25qf.jpg",
    description: "Mix of beans stewed in african spices with honey",
  },
  {
    id: 48,
    name: "Plain Beans",
    price: 12.0,
    type: "Main Course",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678792/DadaKitchen/adaalu_ak25qf.jpg",
    description: "Fusion of stewed gungu peas, kidney beans, african beans",
  },
  {
    id: 49,
    name: "Beans and Plantain",
    price: 12.0,
    type: "Main Course",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678792/DadaKitchen/beans_and_plantain_focw2s.jpg",
    description:
      "Fusion of stewed gungu peas, kidney beans, african beans  with plantain",
  },
  {
    id: 50,
    name: "Pounded Yam with Soup",
    price: 12.55,
    type: "Main Course",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618680666/DadaKitchen/pounded_yam_and_soup_f6dxz7.jpg",
    description: "Pounded yam served with big red tomato soup",
  },
  {
    id: 51,
    name: "Fried Rice",
    price: 9.75,
    type: "Main Course",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618680584/DadaKitchen/Fried_Rice_vhf2pq.jpg",
    description: "Rice fried with vegetables, thyme, curry, and liver",
  },
  {
    id: 52,
    name: "Jollof Rice and Beans with Plantain",
    price: 10.0,
    type: "Main Course",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678794/DadaKitchen/jollof_rice_and_plantain_ulx5ap.jpg",
    description:
      "Rice made with tomatoes, onions, scotch bonnets, and chili peppers served with Beans and Plantain",
  },
  {
    id: 53,
    name: "White Rice and Beans without Plantain",
    price: 10.0,
    type: "Main Course",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618680955/DadaKitchen/white_rice_ge4e2j.jpg",
    description: "White rice boiled served with beans without plantain",
  },
  {
    id: 54,
    name: "White Rice and Plantain",
    price: 8.75,
    type: "Main Course",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618680955/DadaKitchen/white_rice_ge4e2j.jpg",
    description: "White rice boiled served with our fried plantain",
  },
  {
    id: 55,
    name: "Jollof Rice and Plantain",
    price: 8.75,
    type: "Main Course",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678794/DadaKitchen/jollof_rice_and_plantain_ulx5ap.jpg",
    description:
      "Rice made with tomatoes, onions, scotch bonnets, and chili peppers served with Plantain",
  },
  {
    id: 56,
    name: "Amala with Soup",
    price: 12.99,
    type: "Main Course",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618680666/DadaKitchen/pounded_yam_and_soup_f6dxz7.jpg",
    description: "Amala made from Yam flour served with Hot pepper soup",
  },
  {
    id: 57,
    name: "Eba with Soup",
    price: 12.99,
    type: "Main Course",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618680666/DadaKitchen/pounded_yam_and_soup_f6dxz7.jpg",
    description:
      "Made from dried grated cassava (manioc) flour, commonly known as garri.",
  },
  {
    id: 58,
    name: "7Up Regular 330ml",
    price: 1.55,
    type: "Drinks",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678792/DadaKitchen/7up_rhz2ja.jpg",
    description: "The classic crisp lemon-lime drink *free with any main meal*",
  },
  {
    id: 59,
    name: "African fanta",
    price: 3.0,
    type: "Drinks",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678793/DadaKitchen/Arfican_fanta_q4inhi.jpg",
    description: "Straight out of Nigeria *free with any main meal*",
  },
  {
    id: 60,
    name: "African Schweppes",
    price: 3.0,
    type: "Drinks",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678792/DadaKitchen/african_schweppes_wfspju.jpg",
    description: "Tonic water straight from Nigeria *free with any main meal*",
  },
  {
    id: 61,
    name: "Cola Original Taste",
    price: 1.55,
    type: "Drinks",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678793/DadaKitchen/coca_cola_tc4orz.jpg",
    description:
      "Coca-Cola Classic your favourite soft drink *free with any main meal*",
  },
  {
    id: 62,
    name: "Malta Guiness",
    price: 3.0,
    type: "Drinks",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678795/DadaKitchen/malta-guiness_unirn1.png",
    description: "Non-alcoholic Guiness *free with any main meal*",
  },
  {
    id: 63,
    name: "Maltina",
    price: 2.0,
    type: "Drinks",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678794/DadaKitchen/Maltina_ohavcg.jpg",
    description:
      "Malt drink that nourishes your body *free with any main meal*",
  },
  {
    id: 64,
    name: "Red Bull",
    price: 2.0,
    type: "Drinks",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678796/DadaKitchen/redbull_bjly22.jpg",
    description: "It gives you wings *free with any main meal*",
  },
  {
    id: 65,
    name: "Sprite",
    price: 1.55,
    type: "Drinks",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678796/DadaKitchen/sprite_uqrb23.jpg",
    description:
      "A clean, crisp, fresh tasting, sparkling lemon & lime flavour drink.",
  },
  {
    id: 66,
    name: "Tango Orange ",
    price: 1.55,
    type: "Drinks",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678795/DadaKitchen/Orange-Tango_x0gury.png",
    description:
      " 330ml The one with the orange tang *free with any main meal*",
  },
  {
    id: 67,
    name: "Water",
    price: 1.0,
    type: "Drinks",
    image:
      "https://res.cloudinary.com/dsdkktbbt/image/upload/v1618678796/DadaKitchen/water_pxpyjs.jpg",
    description:
      "Bottled at source in the historic spa town of Buxton *free with any main meal*",
  },
];

export default menu;
