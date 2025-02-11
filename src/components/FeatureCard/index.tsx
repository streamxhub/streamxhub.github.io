import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  title: React.ReactNode;
  icon: React.ReactNode;
  content: React.ReactNode;
  animationDelay?: number;
  // color?: string;
  [key: string]: any;
}

export default function FeatureCard(props: Props) {
  // const shadowColor = hexToRgbCode(props.color || '#ad67f7', 0.3);

  return (
    <div className={clsx(styles['feature-card-wrapper'], props.className)}>
      <div
        className={clsx(styles['feature-card'])}
        data-aos='fade-up'
        data-aos-delay={props.animationDelay}
        style={props.style}
      >
        <div className={styles['feature-icon-wrapper']}>
          <div className={styles['feature-icon']}>
            <div className='w-8 h-8'>{props.icon}</div>
          </div>
        </div>
        <div className={clsx(styles['feature-body'])}>
          <h3 className={styles['feature-title']}>{props.title}</h3>
          <p>{props.content}</p>
          <div className={styles['bubble']}></div>
        </div>
      </div>
    </div>
  );
}

function isHexColor(color: string): boolean {
  return /^#[0-9A-F]{6}$/i.test(color);
}

function hexToRgbCode(hex: string, opacity = 1): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
