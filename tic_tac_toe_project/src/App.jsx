import './App.css';
import Header from './components/header/Header.jsx';
import '@fontsource-variable/inter';
import Game from './components/gameNew/Game.jsx';

export default function App() {
  return (
    <HomePageLayout header={<Header />}>
      <Game />
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen font-sans leading-normal">
      {header}
      <main className="pt-6 mx-auto w-max">{children}</main>
    </div>
  );
}
