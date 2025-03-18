const animations = {
  pulse: {
    scale: [1, 1.1, 1],
    transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
  },
  hover: {
    scale: 1.2,
    transition: { duration: 0.3 },
  },
  hoverInnerShadow: {
    boxShadow: `
          inset 0 0 25px rgba(0, 0, 0, 0.6),
          0 4px 15px rgba(0, 0, 0, 0.2)
        `,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.9,
  },
  itemVariants: {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.3 },
    }),
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  },
  slideFromLeft: {
    hidden: { opacity: 0, x: -100 }, // Начинаем слева
    visible: {
      opacity: 1,
      x: 0, // Двигаемся в центр
      transition: { duration: 1, ease: 'easeOut' },
    },
  },
  slideFromRight: {
    hidden: { opacity: 0, x: 100 }, // Начинаем справа
    visible: {
      opacity: 1,
      x: 0, // Двигаемся в центр
      transition: { duration: 1, ease: 'easeOut' },
    },
  },
};

export default animations;
