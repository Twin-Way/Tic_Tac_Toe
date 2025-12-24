import logoSrc from './logo.svg';
import Profile from '../profile/Profile.jsx';
import DownArrowIcon from './icons/DownArrowIcon.jsx';
import UiButton from '../uikit/UiButton.jsx';

export default function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <img src={logoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-300 mx-6"></div>
      <UiButton className="w-44" variant="primary" size="lg">
        Играть
      </UiButton>

      <button className="ml-auto flex items-center gap-2 text-teal-600">
        <Profile name={'User3021'} rating={1203} />
        <DownArrowIcon />
      </button>
    </header>
  );
}
