import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, logo} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <div className="flex flex-row justify-between flex-nowrap">
          <h2 className="text-xl font-bold w-8/12 flex justify-start text-start">{title}</h2>
          <div className="w-1/6 h-auto">
            <img src={logo} />
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-x-2 sm:flex-row">
          <span className=" text-sm font-medium italic">{location}</span>
          <span>•</span>
          <span className="text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
