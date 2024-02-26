import {FC, memo, PropsWithChildren} from 'react';
// import Box from '@mui/material/Box';
import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';
import AngularIcon from 'components/Icon/AngularIcon';
// import React from 'react';
// import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
// import { styled } from '@mui/material/styles';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col">
      <span className="text-center text-lg font-bold">{name}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

// const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//   height: 20,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 300 : 800],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     background: theme.palette.mode === 'light' ? 'linear-gradient(to right, #0013F7, #1a90ff);' : '#D3FD00',
//   },
// }));

SkillGroup.displayName = 'SkillGroup';



export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {

  const {name, level, max = 10} = skill;
  // const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);
  console.log(level, max);



  return (
    <div className="flex flex-col">
      <span className="ml-2 text-sm font-medium">{name}</span>
      <AngularIcon className="h-10 w-10 sm:h-14 sm:w-14" />

      {/* <img src={name}/> */}
      {/* <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
        <div className="h-full rounded-full bg-orange-400" style={{width: `${percentage}%`, backgroundColor: (percentage > 70) ? 'green' : 'orange'}} />
      </div> */}
      {/* <BorderLinearProgress variant="determinate" value={percentage} /> */}
    </div>
  );
});

Skill.displayName = 'Skill';
