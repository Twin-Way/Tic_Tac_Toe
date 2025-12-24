import avatarSrc from '../header/avatar.png';
import clsx from 'clsx';

export default function Profile({ className, name, rating, avatar = avatarSrc }) {
  return (
    <div className={clsx(className, 'ml-auto flex items-center gap-2 text-start text-teal-600')}>
      <img src={avatar} alt="avatar" className="w-12 h-12" />
      <div className="overflow-hidden">
        <div className="text-lg font-[Inter] leading-[1.2] truncate">{name}</div>
        <div className="text-slate-400 text-xs font-[Inter] leading-[1.2]">Рейтинг: {rating}</div>
      </div>
    </div>
  );
}
