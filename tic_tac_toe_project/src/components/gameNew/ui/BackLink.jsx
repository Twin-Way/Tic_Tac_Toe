import { LeftArrowIcon } from '../../game/icons/LeftArrowIcon.jsx';

export default function BackLink() {
  return (
    <a href="#" className="flex items-center gap-2 text-xs text-teal-600 font-[Inter] leading-[1.2] -mb-0.5">
      <LeftArrowIcon />
      На главную
    </a>
  );
}
