import facialTreatmentsImg from '@assets/images/ServicesPage/services-categories/facial-treatments.jpg';
import laserTreatmentsImg from '@assets/images/ServicesPage/services-categories/laser-treatments.jpg';
import microneedlingImg from '@assets/images/ServicesPage/services-categories/microneedling.jpg';
import bodyContouringImg from '@assets/images/ServicesPage/services-categories/body-contouring.jpg';
import laserEpilationImg from '@assets/images/ServicesPage/services-categories/laser-epilation.jpg';

import rosaceaImg from '@assets/images/ServicesPage/sub-services/rosacea.png';
import deepCleansingImg from '@assets/images/ServicesPage/sub-services/deep-cleansing.png';
import acneTreatmentImg from '@assets/images/ServicesPage/sub-services/acne-treatment.jpg';
import faceMassageImg from '@assets/images/ServicesPage/sub-services/face-massage.jpg';
import comedonesImg from '@assets/images/ServicesPage/sub-services/comedones.jpg';
import faceRejuvenationImg from '@assets/images/ServicesPage/sub-services/face-rejuvenation.jpg';
import mensFacialImg from '@assets/images/ServicesPage/sub-services/men-facial.jpg';
import facialTeenagerImg from '@assets/images/ServicesPage/sub-services/facial-teenager.jpg';
import AQUAPUREImg from '@assets/images/ServicesPage/sub-services/AQUAPURE.png';
import peelrImg from '@assets/images/ServicesPage/sub-services/peel.jpg';
import Herbs2PeelImg from '@assets/images/ServicesPage/sub-services/Herbs2Peel.jpg';
import laserFacialImg from '@assets/images/ServicesPage/sub-services/laser-facial.jpg';
import laserHairRemovalImg from '@assets/images/ServicesPage/sub-services/laser-hair-removal.jpg';
import pigmentationImg from '@assets/images/ServicesPage/sub-services/pigmentation.jpg';
import spotImg from '@assets/images/ServicesPage/sub-services/spot.jpg';
import skinTighteningImg from '@assets/images/ServicesPage/sub-services/skin-tightening.jpg';
import moleImg from '@assets/images/ServicesPage/sub-services/mole.jpg';
import spiderVeinsImg from '@assets/images/ServicesPage/sub-services/spider-veins.png';
import agingWrinklesImg from '@assets/images/ServicesPage/sub-services/aging-wrinkles.jpg';
import laserRejuvenationImg from '@assets/images/ServicesPage/sub-services/laser-rejuvenation.jpg';
import nailsImg from '@assets/images/ServicesPage/sub-services/nails.jpg';
import microneedling from '@assets/images/ServicesPage/sub-services/microneedling.jpg';
import PRPImg from '@assets/images/ServicesPage/sub-services/PRP.jpg';
import PRPHairImg from '@assets/images/ServicesPage/sub-services/PRP-hair.jpg';
import microneedlingHairImg from '@assets/images/ServicesPage/sub-services/microneedling-hair.jpg';
import REFITImg from '@assets/images/ServicesPage/sub-services/REFIT.png';
import stretchMarksImg from '@assets/images/ServicesPage/sub-services/stretch-marks.jpg';
import lymphaticDrainageImg from '@assets/images/ServicesPage/sub-services/lymphatic-drainage.jpg';
import electrolysisImg from '@assets/images/ServicesPage/sub-services/electrolysis.png';
import telangiectasiaImg from '@assets/images/ServicesPage/sub-services/telangiectasia.png';
import xanthelasmaImg from '@assets/images/ServicesPage/sub-services/xanthelasma.png';

const services = [
    {
      category: "Facial Treatments",
      id: 1,
      img: facialTreatmentsImg,
      description: 'Facial treatments focus on deep cleansing, hydration, and skin rejuvenation. They help eliminate imperfections, restore an even tone, and give the skin a natural glow and refreshed appearance',
      services: [
        {
            name: "AQUAPURE Facial",
            img: AQUAPUREImg,
            description: "The AQUAPURE Facial offers advanced treatments to cleanse, rejuvenate, and revitalize the skin. The Cooling/Heating Treatment reduces fine lines, firms the skin, and boosts repair. Micro-Current Therapy improves circulation and tones facial muscles for a lifting effect. Electroporation enhances nutrient absorption into deeper skin layers, while Aqua Peeling exfoliates, cleanses, and hydrates, leaving the skin smooth and radiant.",
            minSessions: "2-3", 
            duration: "60 min",
        },
        {
            name: "Laser Facial",
            img: laserFacialImg,
            description: "The Laser Facial is a non-invasive treatment designed to rejuvenate the skin, improve its texture, and restore a natural glow. Using advanced laser technology, it gently targets fine lines, uneven skin tone, enlarged pores, and dullness, stimulating collagen production and enhancing skin elasticity. This treatment not only smooths and brightens the complexion but also helps reduce minor imperfections, leaving the skin looking fresh, radiant, and revitalized after just one session.",
            minSessions: "1-2",
            duration: "45 min",
        },
        {
            name: "Deep Cleansing Facial",
            img: deepCleansingImg,
            description: "The Deep Cleansing Facial is a revitalizing treatment designed to deeply purify the skin, remove impurities, and restore its natural balance. This treatment focuses on thorough cleansing, exfoliation, and gentle extraction to clear clogged pores, reduce blackheads, and minimize breakouts. It also helps to detoxify the skin, improve texture, and boost hydration, leaving the complexion fresh, smooth, and glowing. Perfect for all skin types, especially those prone to acne or congestion, this facial reveals a clearer, healthier, and more radiant appearance.",
            minSessions: "3-4",
            duration: "75 min",
        },
        {
            name: "Acne Treatment",
            img: acneTreatmentImg,
            description: "The Acne Treatment is a targeted skincare solution designed to combat breakouts, reduce inflammation, and restore skin clarity. This treatment focuses on deep cleansing to unclog pores, gentle exfoliation to remove dead skin cells, and specialized techniques to calm irritation and balance oil production. By addressing acne at its root, it helps prevent future breakouts, reduce redness, and minimize acne scars. Ideal for both teens and adults struggling with acne-prone skin, this treatment leaves the complexion clearer, smoother, and visibly healthier.",
            minSessions: "4-6",
            duration: "60 min",
        },
        {
            name: "Face Massage",
            img: faceMassageImg,
            description: "The Face Massage is a rejuvenating treatment that helps reduce forehead lines, facial wrinkles, and signs of aging by stimulating blood circulation and promoting natural collagen production. This relaxing technique improves skin elasticity, smooths fine lines, and lifts sagging areas, resulting in a firmer, more youthful appearance. Ideal for combating the effects of aging and environmental stressors, it leaves your skin refreshed, radiant, and revitalized.",
            minSessions: "1-2",
            duration: "45 min",
        },
        {
            name: "Comedones Removal",
            img: comedonesImg,
            description: "The Comedones Removal treatment is a precise and gentle procedure designed to clear clogged pores and eliminate blackheads and whiteheads, restoring smooth and healthy skin. By deeply cleansing the skin and carefully extracting impurities, it helps reduce the risk of future breakouts, minimize pore size, and improve overall skin texture. This treatment also calms inflammation and balances oil production, leaving the complexion clearer, refined, and visibly healthier. Perfect for those struggling with congested or acne-prone skin.",
            minSessions: "2-4",
            duration: "60 min",
        },
        {
            name: "Face Rejuvenation",
            img: faceRejuvenationImg,
            description: "The Face Rejuvenation Treatment is a comprehensive skincare solution designed to improve skin texture, reduce wrinkles, lift sagging areas, and deeply nourish the skin. After just one session, clients notice a brighter complexion, a visible lifting effect, and a reduction in fine lines. This treatment restores radiance, enhances skin firmness, and leaves the face looking smoother, fresher, and more youthful.",
            minSessions: "3-5",
            duration: "75 min"
        },
        {
            name: "Men's Facial",
            img: mensFacialImg,
            description: "The Men’s Facial is a revitalizing treatment tailored to meet the unique needs of men’s skin. It deeply cleanses pores, removes impurities, and targets concerns like razor burn, ingrown hairs, and excess oil. This treatment also hydrates, soothes irritation, and improves skin texture, leaving the complexion smoother, refreshed, and energized. Perfect for maintaining healthy, clear skin with a boost of confidence.",
            minSessions: "1-3",
            duration: "60 min",
        },
        {
            name: "Facial for Teenager",
            img: facialTeenagerImg,
            description: "The Facial for Teenager is a gentle yet effective treatment designed to address the unique skincare needs of teenage skin. It focuses on deep cleansing, exfoliation, and gentle extraction to help combat acne, blackheads, and excess oil while calming inflammation and preventing future breakouts. This treatment promotes clearer, balanced, and healthier skin, leaving teens with a fresh, smooth, and confident glow.",
            minSessions: "3-5",
            duration: "50 min"
          },
          {
            name: "Vivier Peel",
            img: peelrImg,
            description: "The Vivier Peel is a professional-grade chemical peel designed to rejuvenate the skin, improve texture, and restore a radiant complexion. This gentle yet powerful treatment exfoliates dead skin cells, reduces fine lines, minimizes pores, and evens out skin tone. It also targets hyperpigmentation, acne scars, and dullness, leaving the skin smoother, brighter, and refreshed with a healthy, youthful glow.",
            minSessions: "1-4",
            duration: "45 min", 
          },
          {
            name: "Herbs2Peel Treatment",
            img: Herbs2PeelImg,
            description: "The Herbs2Peel Treatment is a natural enzyme peel that offers a fast and effective way to exfoliate and nourish the skin. Using a blend of pure herbs and enzymes, it gently removes dead skin cells, stimulates cell renewal, and enhances the skin’s natural glow. This treatment improves texture, evens out skin tone, and leaves the complexion smoother, fresher, and visibly revitalized.",
            minSessions: "2-4",
            duration: "60 min",
            },
        ],
    },
    {
      category: "Laser and Electrolysis Treatments",
      id: 2,
      img: laserTreatmentsImg,
      description: 'Laser treatments effectively target pigmentation, spider veins, unwanted hair, and signs of aging. Advanced technology gently enhances skin texture, improves elasticity, and restores a youthful glow',
        services: [
            {
                name: "Laser Hair Removal",
                img: laserHairRemovalImg,
                description: "Laser Hair Removal is a safe and effective method for achieving long-lasting smooth skin. A certified technician applies targeted laser light to unwanted hair, destroying the follicle at the root to prevent regrowth. Since hair grows in cycles, multiple sessions—typically spaced four weeks apart—are needed to treat each hair during its growth phase. This results in significantly reduced hair over time, leaving the skin silky, smooth, and hair-free.",
                minSessions: "6-8",
                duration: "30-90 min",
            },
            {
                name: "Pigmentation Treatment",
                img: pigmentationImg,
                description: "The Pigmentation Treatment is designed to reduce dark spots, sun damage, and uneven skin tone, revealing a clearer and more radiant complexion. Using advanced techniques, this treatment targets excess melanin, lightens hyperpigmentation, and promotes skin cell renewal. Over time, it helps fade discoloration, smooth skin texture, and restore a balanced, even skin tone, leaving your skin brighter, healthier, and naturally glowing.",
                minSessions: "4-6",
                duration: "60 min",
            },
            {
                name: "Spot Treatment",
                img: spotImg,
                description: "The Spot Treatment is a targeted solution designed to reduce dark spots, blemishes, and localized pigmentation. By focusing on specific problem areas, it effectively lightens discoloration, evens out skin tone, and promotes a clearer, more radiant complexion. This treatment helps fade stubborn spots caused by acne, sun damage, or aging, leaving your skin smoother, brighter, and visibly refreshed.",
                minSessions: "3-5",
                duration: "30-45 min",
            },
            {
                name: "Skin Tightening / Toning",
                img: skinTighteningImg,
                description: "The Skin Tightening / Toning treatment is designed to improve skin elasticity, reduce sagging, and create a firmer, more youthful appearance. Using advanced techniques, it stimulates collagen production, smooths fine lines, and enhances skin texture. Ideal for areas prone to laxity, this non-invasive treatment lifts and tones the skin, leaving it visibly tighter, smoother, and naturally radiant.",
                minSessions: "4-6",
                duration: "60 min",
            },
            {
                name: "Skin Tags and Mole Removal",
                img: moleImg,
                description: "The Skin Tags & Mole Removal treatment offers a safe and precise solution for eliminating unwanted skin tags and benign moles. Using advanced, non-invasive techniques, this procedure gently removes imperfections with minimal discomfort and no scarring. It leaves the skin smooth, clear, and refreshed, helping you achieve a flawless appearance while boosting confidence.",
                minSessions: "1-2",
                duration: "30 min",
            },
            {
                name: "Spider Veins Treatment",
                img: spiderVeinsImg,
                description: "The Spider Veins Treatment uses advanced laser technology to safely and effectively reduce the appearance of visible spider veins, leaving your skin clearer and more radiant. This non-invasive procedure precisely targets unwanted veins, breaking them down without damaging surrounding tissue. With no needles or downtime, it smooths your complexion, enhances skin tone, and boosts confidence—all with quick, painless results.",
                minSessions: "2-4",
                duration: "30-45 min",
            },
            {
                name: "Aging Wrinkles / Fine Lines Reduction",
                img: agingWrinklesImg,
                description: "The Aging Wrinkles / Fine Lines Reduction treatment is designed to smooth out fine lines, reduce wrinkles, and restore youthful skin texture. By stimulating collagen production and enhancing skin elasticity, this non-invasive procedure targets visible signs of aging, softening lines and improving overall firmness. The result is smoother, plumper, and more radiant skin, with a naturally refreshed appearance.",
                minSessions: "4-6",
                duration: "60 min",
            },
            {
                name: "Laser Rejuvenation",
                img: laserRejuvenationImg,
                description: "The Laser Rejuvenation treatment is a non-invasive procedure that revitalizes the skin by targeting fine lines, wrinkles, and uneven skin tone. Using advanced laser technology, it stimulates collagen production, smooths skin texture, and reduces signs of aging. This treatment brightens the complexion, improves elasticity, and leaves the skin firmer, clearer, and naturally radiant with minimal downtime.",
                minSessions: "3-5",
                duration: "60 min",
            },
            {
                name: "Nails Fungus Laser Treatment",
                img: nailsImg,
                description: "The Nails Fungus Laser Treatment is a safe and effective solution for eliminating fungal infections from toenails and fingernails. Using advanced laser technology, it targets the fungus beneath the nail without damaging surrounding tissue, promoting healthy nail growth. This non-invasive treatment helps restore the clarity, strength, and appearance of your nails, leaving them healthier, clearer, and fungus-free.",
                minSessions: "4-8",
                duration: "30-45 min",
            },
            {
                name: "Electrolysis Hair Removal",
                img: electrolysisImg,
                description: "Electrolysis Hair Removal is a precise and permanent method for eliminating unwanted hair from the face or body. Using heat energy, this treatment targets and destroys the hair’s growth center by inserting a fine probe into the follicle, followed by gentle removal with tweezers. Safe and effective for all skin types, electrolysis offers long-lasting results, leaving your skin smooth, hair-free, and flawless.",
                minSessions: "8-12",
                duration: "15-60 min",
            },
            {
                name: "Rosacea Treatment",
                img: rosaceaImg,
                description: "The Rosacea Treatment is designed to reduce redness, inflammation, and visible blood vessels commonly associated with rosacea. Using advanced techniques, it soothes irritated skin, strengthens blood vessels, and helps even out skin tone. This gentle yet effective treatment minimizes flare-ups, calms sensitivity, and leaves the complexion clearer, smoother, and more balanced.",
                minSessions: "4-6",
                duration: "45-60 min",
            },
            {
                name: "Facial Telangiectasia Treatment",
                img: telangiectasiaImg,
                description: "The Facial Telangiectasia Treatment targets visible broken capillaries and spider veins on the face, reducing redness and restoring an even skin tone. Using precise, non-invasive techniques, it gently collapses dilated blood vessels without harming surrounding tissue. This treatment helps smooth the complexion, minimize redness, and leave the skin clearer, healthier, and naturally radiant.",
                minSessions: "2-4",
                duration: "30-45 min"
            },
        ],
    },
    {
      category: "Microneedling & PRP",
      id: 3,
      img: microneedlingImg,
      description: 'Microneedling and PRP therapy stimulate natural skin renewal, improving elasticity and texture. These treatments help reduce wrinkles, diminish pigmentation, and strengthen hair, leaving the skin healthier and more youthful',
        services: [
            {
                name: "Microneedling",
                img: microneedling,
                description: "Microneedling is a minimally invasive skin rejuvenation treatment that stimulates collagen production, resulting in firmer, smoother, and more youthful-looking skin. This procedure effectively reduces wrinkles, fine lines, and acne scars while improving overall skin texture and minimizing pore size. By creating microchannels in the skin, it enhances the absorption of skincare products, maximizing their effectiveness. Safe and with minimal downtime, Microneedling offers long-lasting results, leaving the complexion radiant, refreshed, and beautifully renewed.",
                minSessions: "3-6",
                duration: "60 min"
            },
            {
                name: "PRP Treatment",
                img: PRPImg,
                description: "PRP Treatment uses your body’s natural growth factors, found in platelets, to rejuvenate the skin and restore its vitality. This regenerative therapy improves skin texture, boosts collagen production, and enhances overall skin quality. It’s also highly effective in reducing the appearance of scars and keloids, helping to heal and smooth damaged areas. Safe and natural, PRP leaves your skin looking fresher, firmer, and more radiant.",
                minSessions: "3-5",
                duration: "60 min",
            },
            {
                name: "PRP Hair Treatment",
                img: PRPHairImg,
                description: "PRP Hair Treatment is an advanced, non-surgical solution that stimulates natural hair growth using the body’s own platelet-rich plasma. This therapy boosts blood flow to hair follicles, encouraging regrowth and increasing hair density. Noticeable improvements typically appear within three months, with many patients experiencing 30% to 40% regrowth of lost hair. Suitable for both men and women, PRP offers a safe and effective way to restore thicker, healthier hair.",
                minSessions: "4-6",
                duration: "60 min"
            },
            {
                name: "Microneedling Hair Loss Treatment",
                img: microneedlingHairImg,
                description: "The Microneedling Hair Loss Treatment is a highly effective solution for stimulating natural hair growth in both men and women. By creating micro-injuries on the scalp, this treatment boosts blood circulation and activates hair follicles, encouraging thicker, stronger, and healthier hair. It also enhances the absorption of hair growth serums, maximizing results. With regular sessions, microneedling helps reduce thinning and promotes fuller, denser hair.",
                minSessions: "4-8",
                duration: "60 min"
            }
        ],
    },
    {
      category: "Body Contouring & Skin Rejuvenation",
      id: 4,
      img: bodyContouringImg,
      description: 'Body contouring and skin rejuvenation treatments enhance skin firmness, reduce wrinkles, and smooth out imperfections. Advanced techniques help sculpt the body, minimize cellulite, and restore a youthful appearance',
        services: [
            {
                name: "REFIT Body Contouring Treatment",
                img: REFITImg,
                description: "The REFIT Body Contouring Treatment is a cutting-edge, non-invasive solution designed to sculpt, tone, and enhance your body’s natural shape. Using advanced techniques, this treatment targets stubborn fat, tones muscles, and improves skin texture, delivering visible results after just one session. It stimulates the body’s natural processes to break down fat cells, leaving you with a more contoured, firm, and radiant appearance. Perfect for boosting confidence and achieving a sculpted look without surgery or downtime.",
                minSessions: "4-6",
                duration: "60 min",
            },
            {
                name: "Stretch Marks Removal",
                img: stretchMarksImg,
                description: "The Stretch Marks Removal treatment is designed to reduce the appearance of stretch marks, improve skin texture, and restore smoothness. Using advanced techniques, it stimulates collagen production and promotes skin regeneration, helping to fade stretch marks and blend them with your natural skin tone. Over time, the skin becomes firmer, more even, and visibly smoother, leaving you with renewed confidence and healthier-looking skin.",
                minSessions: "5-8",
                duration: "60 min",
            },
            {
                name: "Lymphatic Drainage",
                img: lymphaticDrainageImg,
                description: "The Lymphatic Drainage treatment is a gentle vacuum massage enhanced with radio frequencies, designed to stimulate the lymphatic system, promote detoxification, and improve circulation. This non-invasive procedure aids in reducing water retention, boosting weight loss efforts, and tightening loose skin. It not only helps sculpt and contour the body but also leaves the skin firmer, smoother, and more toned, offering a natural, healthy glow.",
                minSessions: "4-6",
                duration: "50 min",
            }
        ],
    },
    {
      category: "Specialized Treatments",
      id: 5,
      img: laserEpilationImg,
      description: 'Personalized treatments crafted to address specific skin imperfections and delicate concerns. From targeted corrections to advanced skin care solutions, these procedures offer precise results for long-lasting beauty and confidence',
      services: [
        {
            name: "Xanthelasma Treatment",
            img: xanthelasmaImg,
            description: "The Xanthelasma Treatment targets yellow cholesterol deposits that commonly appear around the inner corners of the eyelids. While harmless, these patches can affect your appearance. This treatment safely removes the buildup, restoring a smoother, clearer look to the skin and helping you feel more confident.",
            minSessions: "1-2",
            duration: "30 min",
        },
      ],
    },
 
];
  
export default services;