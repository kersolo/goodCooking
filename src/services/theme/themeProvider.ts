export const themeProvider = {
  list: {
    defaultProps: {
      ripple: false,
    },
    styles: {
      base: {
        item: {
          initial: {
            bg: "bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent",
          },
          selected: {
            bg: "bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent",
            color: "text-blue-gray-700",
          },
        },
      },
    },
  },
};
