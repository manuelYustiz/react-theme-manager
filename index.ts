import { createContext, useContext, ReactNode, type FC } from 'react';


interface ThemeContextProps {
  breakpoints: Record<string, number>;
}

// const ThemeManagerContext = createContext<ThemeContextProps>({
//   breakpoint: [],
// });

// interface ThemeManagerProviderProps {
//   children: ReactNode;
//   breakpoints: Record<string, number>;
// }

// const ThemeManagerProvider: FC<ThemeManagerProviderProps> = ({ children, breakpoints}) => {
//   type TBreakpoints = typeof breakpoints;
//   type KBreakpoints = keyof TBreakpoints;

//   return (
//     <ThemeManagerContext.Provider value={{ breakpoints }}>
//       {children}
//     </ThemeManagerContext.Provider>
//   );
// };

// const useThemeManager = () => {
//   const context = useContext(ThemeManagerContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };

// export {
//   ThemeManagerContext,
//   ThemeManagerProvider,
//   useThemeManager,
// };