import Image from 'next/image';
import Link from 'next/link';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface Props {
  align?: 'left' | 'right';
  project: {
    id: number;
    name: string;
    description: string;
    tasks: string;
    url: string;
    img: string;
    tags: string[];
    repo?: string;
  };
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Project = ({ align = 'left', project, ...rest }: Props) => {
  const { name, description, tasks, url, img, tags } = project;

  return (
    <>
      <div
        className={cn(
          'relative hidden lg:block min-h-[280px] sm:min-h-[360px] h-full overflow-hidden lg:overflow-visible rounded-lg lg:rounded-xl shadow-lg lg:shadow-none text-center lg:text-right',
          align === 'left' && 'lg:text-left'
        )}
        {...rest}
      >
       <div
        className={cn(
            'w-full lg:max-w-[60%] relative h-auto aspect-video rounded overflow-hidden shadow-2xl group',
            align === 'left' && 'ml-auto'
        )}
        >
        <Image
            src={img}
            alt="project_image"
            width={720}
            height={480}
            className="object-contain w-full transition-transform duration-200 group-hover:scale-105"
        />
        <Link
            href={url}
            target="_blank"
            className="absolute inset-0 z-10 block bg-transparent"
        />
        </div>


        <div
          className={cn(
            'lg:max-w-[45%] space-y-2 lg:space-y-5 w-full h-full p-5 lg:p-0',
            'absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0',
            'lg:h-auto left-0 lg:left-auto top-0 right-auto lg:bg-none lg:text-inherit',
            'flex flex-col justify-end',
            'bg-gradient-to-t from-black/80 group-hover:from-accent group-focus:from-accent',
            align === 'left' && 'lg:left-0'
          )}
        >
          <div>
            <div className="font-mono hidden lg:block text-accent capitalize text-xs lg:mb-2.5">
              featured project
            </div>
            <h2 className="heading-tertiary !text-white lg:!text-dark-2 !font-semibold lg:!font-normal !normal-case">
              <a
                href={url}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                {name}
              </a>
            </h2>
          </div>

          <div className="rounded-sm bg-gray-800 lg:bg-bg-secondary lg:shadow-lg lg:p-5">
            <div
              className={cn(
                'lg:max-w-sm text-dark-1 lg:text-inherit text-sm lg:text-base',
                align === 'right' && 'ml-auto'
              )}
            >
              <p className="text-dark-1">{description}</p>
              
              <div className="hidden text-base lg:block lg:text-sm">
                {tasks}
              </div>
            </div>
          </div>

          <p
            className={cn(
              'font-mono text-[10px] text-accent lg:text-accent lg:text-xs justify-center capitalize flex flex-wrap gap-2 lg:gap-x-5 items-center lg:justify-end',
              align === 'left' && 'lg:justify-start'
            )}
          >
            {tags.map((tag) => (
              <span key={tag.replaceAll(' ', '')}>{tag}</span>
            ))}
          </p>

          
        </div>
      </div>

      {/* For mobile */}
      <div
        className={cn(
          'relative lg:hidden min-h-[300px] h-full rounded-3xl shadow-lg lg:shadow-none text-center'
        )}
        {...rest}
      >
        <header className={cn('w-full')}>
          <Image
            src={img}
            alt={name}
            width={720}
            height={400}
            className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
          />
          <Link
            href={url}
            target="_blank"
            className="absolute inset-0 z-10 block bg-transparent"
          />
        </header>

        <div className={cn('bg-gray-800 p-5 space-y-2')}>
          <div>
            <h2 className="heading-tertiary !text-white !font-semibold !normal-case">
              <a
                href={url}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                {name}
              </a>
            </h2>
          </div>

          <div className={cn('text-dark-1 space-y-2 text-sm')}>
            <p className="text-base text-dark-1">{description}</p>
        
            <div className="mb-2 space-y-1">
              {tasks?.split(',').map((task) => (
                <div key={task.slice(0, 10)}>{task}</div>
              ))}
            </div>
          </div>

          <p
            className={cn(
              'font-mono text-[10px] text-accent lg:text-accent lg:text-xs justify-center capitalize flex flex-wrap gap-2 lg:gap-x-5 items-center lg:justify-end',
              align === 'left' && 'lg:justify-start'
            )}
          >
            {tags.map((tag) => (
              <span key={tag.replaceAll(' ', '')}>{tag}</span>
            ))}
          </p>

        </div>
      </div>
    </>
  );
};

export default Project;
