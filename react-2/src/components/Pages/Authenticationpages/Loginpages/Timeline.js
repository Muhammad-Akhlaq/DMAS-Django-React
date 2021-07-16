import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';

import WorkIcon from '@material-ui/icons/Work';

import './Timeline.css';
const CustomTimeline = ({title,icon,children}) => {
    return (
        <Timeline className='Timeline'>
            {/*Item Header */}
        <TimelineItem className='Timeline-first-item'>
          <TimelineSeparator>
            <TimelineDot className='Timeline-Dot-Header'>{icon}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
              <Typography variant='h6' className='Timeline-header'>{title}</Typography>
              </TimelineContent>
        </TimelineItem>
        {children}
        {/*Item remaining */}
       {/*  <TimelineItem>
        <CustomTimelineSeprator/>
        
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>*/}
        
      </Timeline>
    )
}
export const CustomTimelineSeprator=()=>(
    <TimelineSeparator className='seprator' >
    <TimelineDot variant={'outlined'} className='Timeline-Dot-item' />
    <TimelineConnector />
  </TimelineSeparator>
)
export default CustomTimeline

