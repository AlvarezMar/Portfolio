"use client";

import { Timeline } from "flowbite-react";
import styles from './Experience.module.css'

import experience from '../../assets/sections/experience.svg'

export function Experience() {
  return <div className={styles.container}>
    <div className={styles.section}>
      <img src={experience} alt="" width='30px' />
      <h2>Experience</h2>
    </div>

    <div className={styles.experience}>
      <Timeline>
        <Timeline.Item>
          <Timeline.Point className={styles.point} />
          <Timeline.Content>
            <Timeline.Time>August 2023</Timeline.Time>
            <Timeline.Title>Full Stack Web Developer. Henry Bootcamp.</Timeline.Title>
            <Timeline.Body>
              Completed over 800 hours of theoretical and practical coursework, involving the creation of various projects and learning multiple technologies. Gained hands-on experience in software development, including front-end and back-end programming, version control, and collaborative coding practices.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point className={styles.point}/>
          <Timeline.Content>
            <Timeline.Time>July 2022</Timeline.Time>
            <Timeline.Title>Electromechanical Maintenance. Mexico Aviation School.</Timeline.Title>
            <Timeline.Body>
              Oil change in hydraulic actuators of the flight simulator. Wiring of panel instruments for a new flight simulator. Implementation of Arduino code for instrument calibration with potentiometers when the flight simulator is turned on. Support to other areas with office-related tasks.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point className={styles.point}/>
          <Timeline.Content>
            <Timeline.Time>May 2021</Timeline.Time>
            <Timeline.Title>Mechanical Maintenance. Minigrip Mexico.</Timeline.Title>
            <Timeline.Body>
              Cleaning and maintenance of industrial machinery. Support to operators to ensure the proper functioning of their machines. Lubrication as part of industrial maintenance and implementation of a schedule to keep a record of this process. Task planning and support to other departments.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  </div>
}
