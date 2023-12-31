import Image from 'next/image';
import Link from 'next/link';
import { type EnterprisePartial } from 'types/enterprise';
import { cn } from 'utils/cn';

export const EnterpriseCard = ({
  enterprise,
  href,
  className,
}: {
  enterprise: EnterprisePartial;
  href?: string;
  className?: string;
}) => (
  <Link
    href={href || `/empreendimentos/${enterprise.id}`}
    className="group flex justify-center"
  >
    <div
      className={cn(
        'relative max-w-sm max-h-[680px] w-max h-max overflow-hidden',
        className,
      )}
    >
      <Image
        src={enterprise.featured_media}
        alt=""
        aria-hidden
        width={1036}
        height={1284}
        className="w-full h-[480px] object-cover object-center group-hover:scale-110 transition-all"
      />
      <div className="absolute bg-gradient-to-t h-1/2 from-primary from-15% z-10 bottom-0 left-0 w-full p-8 flex flex-col justify-end">
        <h1 className="text-3xl text-white block truncate">{enterprise.title}</h1>
        <h2 className="text-xl text-white/60 block truncate">{enterprise.status}</h2>
      </div>
    </div>
  </Link>
);
