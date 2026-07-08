import facialTreatmentsImg from '@assets/images/ServicesPage/services-categories/facial-treatments.jpg';
import microneedlingImg from '@assets/images/ServicesPage/services-categories/microneedling.jpg';
import bodyContouringImg from '@assets/images/ServicesPage/services-categories/body-contouring.jpg';

const services = [
  {
    category: 'Facial Treatments',
    id: 1,
    img: facialTreatmentsImg,
    description:
      'Facial treatments focus on deep cleansing, hydration, and skin rejuvenation. They help eliminate imperfections, restore an even tone, and give the skin a natural glow and refreshed appearance',
    services: [
      {
        name: 'Botox',
        description:
          'Botox is one of the most popular treatments for softening forehead lines, frown lines, and crow’s feet. It helps relax facial muscles while keeping your appearance natural, refreshed, and well-rested.',
      },
      {
        name: 'Lip Filler',
        description:
          'Whether you want subtle hydration or fuller lips, lip filler can improve shape, definition, symmetry, and volume while maintaining a balanced natural look.',
      },
      {
        name: 'Dermal Fillers',
        description:
          'As we age, the face naturally loses volume and structure. Dermal fillers help restore contour, soften deeper lines, and enhance features like cheeks, chin, and jawline.',
      },
      {
        name: 'Skin Boosters & Biorevitalization',
        description:
          'Dry, tired, and dull skin can benefit from deep hydration treatments that improve glow, elasticity, texture, and overall skin quality from within.',
      },
      {
        name: 'Polynucleotides',
        description:
          'Polynucleotide treatments support skin repair and regeneration, making them especially popular for sensitive skin, redness, under-eyes, and early signs of aging.',
      },
      {
        name: 'Biostimulators',
        description:
          'Rather than simply adding volume, biostimulators work by stimulating your body’s own collagen production for firmer, healthier-looking skin over time.',
      },
      {
        name: 'PRP & PRF',
        description:
          'Using your body’s own natural growth factors, PRP and PRF treatments help improve skin quality, healing, texture, and overall rejuvenation naturally.',
      },
      {
        name: 'Microneedling',
        description:
          'Microneedling creates controlled micro-channels in the skin to stimulate collagen and improve acne scars, pores, fine lines, and uneven texture.',
      },
      {
        name: 'Chemical Peels',
        description:
          'Chemical peels help remove damaged surface skin cells to improve acne, pigmentation, rough texture, dullness, and uneven skin tone.',
      },
      {
        name: 'Acne & Acne Scar Treatments',
        description:
          'Every acne journey is different. We create customized treatment plans to help manage active acne, congestion, post-acne marks, and acne scarring.',
      },
      {
        name: 'Under-Eye Rejuvenation',
        description:
          'The under-eye area is delicate and often one of the first places to show fatigue and aging. Treatments can help improve hydration, texture, fine lines, and tired-looking eyes.',
      },
      {
        name: 'Facials',
        description:
          'Our facial treatments are customized for your skin concerns and may focus on hydration, deep cleansing, calming inflammation, or restoring healthy glow.',
      },
      {
        name: 'Skin Tag & Papilloma Removal',
        description:
          'We offer cosmetic removal of small benign skin growths to help improve skin appearance and texture with minimal downtime.',
      },
      {
        name: 'Myers’ Cocktail',
        description:
          'A classic wellness IV designed to support hydration, immunity, recovery, energy levels, and overall wellness using a blend of vitamins and minerals.',
      },
      {
        name: 'NAD+ Therapy',
        description:
          'NAD+ infusions are popular for supporting mental clarity, energy, focus, recovery, and healthy aging, especially during periods of stress and fatigue.',
      },
      {
        name: 'Cinderella Drip',
        description:
          'A beauty-focused vitamin infusion designed to support brighter skin, hydration, glow, and a refreshed appearance from the inside out.',
      },
      {
        name: 'Iron Infusions',
        description:
          'Iron therapy may help clients experiencing low iron levels, fatigue, weakness, or iron deficiency after appropriate assessment and recommendations.',
      },
      {
        name: 'Hydration IV Therapy',
        description:
          'Hydration infusions help replenish fluids and electrolytes while supporting recovery, energy, and overall well-being.',
      },
      {
        name: 'Vitamin Boost Infusions',
        description:
          'Customized vitamin drips tailored to your wellness goals, including immunity support, recovery, energy, hydration, and stress support.',
      },
      {
        name: 'Dermal Fillers',
        description:
          'Dermal fillers help restore facial volume, soften lines, enhance contours, and create balanced natural-looking results.',
      },
      {
        name: 'Radiesse',
        description:
          'Radiesse provides immediate structure and volume while also stimulating collagen production for firmer, rejuvenated-looking skin over time.',
      },
      {
        name: 'Sculptra',
        description:
          'Sculptra works gradually by stimulating your body’s own collagen to improve volume loss, skin quality, and overall facial rejuvenation.',
      },
      {
        name: 'Facial Balancing',
        description:
          'A customized approach combining advanced injectables to improve facial proportions, symmetry, and natural harmony.',
      },
      {
        name: 'AQUAPURE Facial',
        description:
          'The AQUAPURE Facial offers advanced treatments to cleanse, rejuvenate, and revitalize the skin. The Cooling/Heating Treatment reduces fine lines, firms the skin, and boosts repair. Micro-Current Therapy improves circulation and tones facial muscles for a lifting effect. Electroporation enhances nutrient absorption into deeper skin layers, while Aqua Peeling exfoliates, cleanses, and hydrates, leaving the skin smooth and radiant.',
      },
      {
        name: 'Deep Cleansing Facial',
        description:
          'Deep Cleansing Facial is a revitalizing treatment that deeply purifies the skin, removes impurities, and restores its natural balance. It includes thorough cleansing, exfoliation, and gentle extraction to clear clogged pores, reduce blackheads, and minimize breakouts. This facial detoxifies, improves texture, boosts hydration, and leaves the skin fresh, smooth, and glowing. Ideal for all skin types, especially acne-prone or congested skin.',
      },
      {
        name: 'Acne Treatment',
        description:
          'Acne Treatment is a targeted solution designed to combat breakouts, reduce inflammation, and restore skin clarity. It includes deep cleansing to unclog pores, gentle exfoliation to remove dead skin cells, and calming techniques to soothe irritation and balance oil production. By addressing acne at its root, it helps prevent future breakouts, reduce redness, and minimize acne scars. Ideal for teens and adults with acne-prone skin, this treatment leaves the complexion clearer, smoother, and healthier.',
      },
      {
        name: 'Face Massage',
        description:
          'The Face Massage is a rejuvenating treatment that helps reduce forehead lines, facial wrinkles, and signs of aging by stimulating blood circulation and promoting natural collagen production. This relaxing technique improves skin elasticity, smooths fine lines, and lifts sagging areas, resulting in a firmer, more youthful appearance. Ideal for combating the effects of aging and environmental stressors, it leaves your skin refreshed, radiant, and revitalized.',
      },
      {
        name: 'Comedones Removal',
        description:
          'Comedones Removal is a precise, gentle treatment that clears clogged pores by eliminating blackheads and whiteheads, restoring smooth, healthy skin. Through deep cleansing and careful extraction, it helps prevent future breakouts, minimize pores, and improve texture. It also calms inflammation and balances oil, leaving the complexion clearer and more refined. Ideal for congested or acne-prone skin.',
      },
      {
        name: 'Face Rejuvenation',
        description:
          'The Face Rejuvenation Treatment is a comprehensive skincare solution designed to improve skin texture, reduce wrinkles, lift sagging areas, and deeply nourish the skin. After just one session, clients notice a brighter complexion, a visible lifting effect, and a reduction in fine lines. This treatment restores radiance, enhances skin firmness, and leaves the face looking smoother, fresher, and more youthful.',
      },
      {
        name: "Men's Facial",
        description:
          'The Men’s Facial is a revitalizing treatment tailored to meet the unique needs of men’s skin. It deeply cleanses pores, removes impurities, and targets concerns like razor burn, ingrown hairs, and excess oil. This treatment also hydrates, soothes irritation, and improves skin texture, leaving the complexion smoother, refreshed, and energized. Perfect for maintaining healthy, clear skin with a boost of confidence.',
      },
      {
        name: 'Facial for Teenager',
        description:
          'The Facial for Teenager is a gentle yet effective treatment designed to address the unique skincare needs of teenage skin. It focuses on deep cleansing, exfoliation, and gentle extraction to help combat acne, blackheads, and excess oil while calming inflammation and preventing future breakouts. This treatment promotes clearer, balanced, and healthier skin, leaving teens with a fresh, smooth, and confident glow.',
      },
      {
        name: 'Vivier Peel',
        description:
          'The Vivier Peel is a professional-grade chemical peel designed to rejuvenate the skin, improve texture, and restore a radiant complexion. This gentle yet powerful treatment exfoliates dead skin cells, reduces fine lines, minimizes pores, and evens out skin tone. It also targets hyperpigmentation, acne scars, and dullness, leaving the skin smoother, brighter, and refreshed with a healthy, youthful glow.',
      },
      {
        name: 'Herbs2Peel Treatment',
        description:
          'The Herbs2Peel Treatment is a natural enzyme peel that offers a fast and effective way to exfoliate and nourish the skin. Using a blend of pure herbs and enzymes, it gently removes dead skin cells, stimulates cell renewal, and enhances the skin’s natural glow. This treatment improves texture, evens out skin tone, and leaves the complexion smoother, fresher, and visibly revitalized.',
      },
    ],
  },
  {
    category: 'Microneedling & PRP',
    id: 2,
    img: microneedlingImg,
    description:
      'Microneedling and PRP therapy stimulate natural skin renewal, improving elasticity and texture. These treatments help reduce wrinkles, diminish pigmentation, and strengthen hair, leaving the skin healthier and more youthful',
    services: [
      {
        name: 'Microneedling',
        description:
          'Microneedling is a minimally invasive treatment that boosts collagen production for firmer, smoother, and more youthful skin. It reduces wrinkles, fine lines, and acne scars, improves texture, and minimizes pores. The microchannels also enhance skincare absorption. Safe with minimal downtime, Microneedling leaves the complexion refreshed and radiant.',
      },
      {
        name: 'PRP Treatment',
        description:
          'PRP Treatment uses your body’s natural growth factors, found in platelets, to rejuvenate the skin and restore its vitality. This regenerative therapy improves skin texture, boosts collagen production, and enhances overall skin quality. It’s also highly effective in reducing the appearance of scars and keloids, helping to heal and smooth damaged areas. Safe and natural, PRP leaves your skin looking fresher, firmer, and more radiant.',
      },
      {
        name: 'PRP Hair Treatment',
        description:
          'PRP Hair Treatment is an advanced, non-surgical solution that stimulates natural hair growth using the body’s own platelet-rich plasma. This therapy boosts blood flow to hair follicles, encouraging regrowth and increasing hair density. Noticeable improvements typically appear within three months, with many patients experiencing 30% to 40% regrowth of lost hair. Suitable for both men and women, PRP offers a safe and effective way to restore thicker, healthier hair.',
      },
      {
        name: 'Microneedling Hair Loss Treatment',
        description:
          'The Microneedling Hair Loss Treatment is a highly effective solution for stimulating natural hair growth in both men and women. By creating micro-injuries on the scalp, this treatment boosts blood circulation and activates hair follicles, encouraging thicker, stronger, and healthier hair. It also enhances the absorption of hair growth serums, maximizing results. With regular sessions, microneedling helps reduce thinning and promotes fuller, denser hair.',
      },
    ],
  },
  {
    category: 'Body Contouring & Skin Rejuvenation',
    id: 3,
    img: bodyContouringImg,
    description:
      'Body contouring and skin rejuvenation treatments enhance skin firmness, reduce wrinkles, and smooth out imperfections. Advanced techniques help sculpt the body, minimize cellulite, and restore a youthful appearance',
    services: [
      {
        name: 'Lipolytic Treatments',
        description:
          'Lipolytic injections are designed to help reduce small stubborn fat pockets in areas such as the chin and body while improving contour definition.',
      },
      {
        name: 'RF Body Contouring',
        description:
          'Radiofrequency body treatments help tighten skin, improve texture, and support collagen production while targeting areas with mild skin laxity.',
      },
      {
        name: 'Cellulite & Skin Tightening',
        description:
          'Body treatments focused on improving skin smoothness, firmness, and overall texture for a more toned appearance.',
      },
      {
        name: 'REFIT Body Contouring Treatment',
        description:
          'REFIT Body Contouring is a non-invasive treatment designed to sculpt, tone, and enhance your body’s natural shape. Using advanced techniques, it targets stubborn fat, tones muscles, and improves skin texture, often delivering visible results after just one session. By stimulating natural fat breakdown, it leaves the body more contoured, firm, and radiant. Perfect for achieving a sculpted look without surgery or downtime.',
      },
      {
        name: 'Stretch Marks Removal',
        description:
          'The Stretch Marks Removal treatment is designed to reduce the appearance of stretch marks, improve skin texture, and restore smoothness. Using advanced techniques, it stimulates collagen production and promotes skin regeneration, helping to fade stretch marks and blend them with your natural skin tone. Over time, the skin becomes firmer, more even, and visibly smoother, leaving you with renewed confidence and healthier-looking skin.',
      },
      {
        name: 'Lymphatic Drainage',
        description:
          'The Lymphatic Drainage treatment is a gentle vacuum massage enhanced with radio frequencies, designed to stimulate the lymphatic system, promote detoxification, and improve circulation. This non-invasive procedure aids in reducing water retention, boosting weight loss efforts, and tightening loose skin. It not only helps sculpt and contour the body but also leaves the skin firmer, smoother, and more toned, offering a natural, healthy glow.',
      },
    ],
  },
];

export default services;
