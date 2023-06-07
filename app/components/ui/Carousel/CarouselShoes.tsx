import React from 'react';

import { ItemCard } from '../cards/Cards';

import { products } from 'data/product.data'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


const items = products


export const CarouselShoes = () => {
  const [activeNumber, setActiveNumber] = React.useState(1);
  const scrollRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    const container = scrollRef.current;
    const handler = () => {
      if (container) {
        const containerScrollWidth = scrollRef.current.scrollWidth - scrollRef.current.offsetWidth;
        const elementWidth = scrollRef.current.scrollWidth / items.length;
        const newActiveNumber =
          1 +
          items.length -
          Math.floor(
            Math.ceil(
              Math.ceil(scrollRef.current.scrollWidth) - Math.ceil(scrollRef.current.scrollLeft)
            ) / Math.floor(elementWidth)
          );

        console.log('@elementWidth', elementWidth);
        console.log('@scrollRef.current.scrollWidth', scrollRef.current.scrollWidth);
        console.log('@scrollRef.current.clientWidth', scrollRef.current.clientWidth);
        console.log('@scrollRef.current.scrollLeft', scrollRef.current.scrollLeft);
        console.log(
          '-',
          scrollRef.current.scrollWidth -
            scrollRef.current.scrollLeft -
            scrollRef.current.clientWidth
        );
        console.log(
          '/',
          (scrollRef.current.scrollWidth -
            scrollRef.current.scrollLeft -
            scrollRef.current.clientWidth) /
            elementWidth
        );
        console.log(
          'newActiveNumber',

          items.length -
            (scrollRef.current.scrollWidth -
              scrollRef.current.scrollLeft -
              scrollRef.current.clientWidth) /
              elementWidth
        );

        if (activeNumber !== newActiveNumber) {
          setActiveNumber(newActiveNumber);
        }
      }
    };

    if (container) {
      container.addEventListener('scroll', handler, {
        capture: false,
        passive: true
      });
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handler);
      }
    };
  }, [scrollRef, activeNumber]);

  const onNextClick = () => {
    const nextActiveNumber = activeNumber + 1;

    scrollRef.current?.scrollTo({
      left: scrollRef.current.scrollLeft + scrollRef.current.scrollWidth / items.length,
      behavior: 'smooth'
    });
    setActiveNumber(nextActiveNumber);
  };

  const onBackClick = () => {
    const prevActiveNumber = activeNumber - 1;
    scrollRef.current?.scrollTo({
      left: scrollRef.current.scrollLeft - scrollRef.current.scrollWidth / items.length,
      behavior: 'smooth'
    });
    setActiveNumber(prevActiveNumber);
  };

  console.log('activeNumber', activeNumber);
  const isBackDisabled = activeNumber === 1;
  const isNextDisabled = items.length === activeNumber;

  return (
    <section className='flex flex-col items-center justify-between ' >
      <div className='w-full xl:container xl:mx-auto' >
        <div className='flex  items-center justify-between px-[2.25rem]'>
          <h2 className='font-bold text-xl'>
            Trending This Week
          </h2>

          <div className='flex items-center justify-between gap-[0.938rem]'>
            <button disabled={isBackDisabled} onClick={onBackClick}>
              <IoIosArrowDropleftCircle/>
            </button>

            <button disabled={isNextDisabled} onClick={onNextClick}>
            <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>

        <ul
          ref={scrollRef}
          className='mt-[2rem] flex w-full snap-x snap-mandatory scroll-p-[2.25rem] gap-[0.75rem] overflow-x-auto scroll-smooth pb-[1.875rem] ps-[2.25rem] transition'
        >
          {items.map((item) => (
            <li key={item.id} className='snap-start' >
              <ItemCard  product={item} />
            </li>
          ))}
          <li className='shrink-0 grow-0 basis-[2.25rem] ' />
        </ul>
      </div>
    </section>
  );
};