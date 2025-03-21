import { Header } from "./Header";
import { Footer } from "./Footer";
import AOSInit from "./AOSInit";

export function Layout({ locales, navigation, settings, children }) {
  return (
    <div className="text-slate-800">
      <AOSInit />
      <Header locales={locales} navigation={navigation} settings={settings} />
      <main>{children}</main>
      <Footer settings={settings} navigation={navigation} />
    </div>
  );
}
