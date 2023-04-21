import { trigger, state, transition, style, animate, AnimationTriggerMetadata } from '@angular/animations';

export const slide: AnimationTriggerMetadata =
  trigger('slide', [
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('0.8s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
      animate('0.8s ease-in-out', style({ transform: 'translateX(100%)' }))
    ])
  ]);

export const fade: AnimationTriggerMetadata =
  trigger('fade', [
    state('void', style({
      opacity: 0
    })),
    transition(':enter, :leave', [
      animate('0.5s ease-in-out')
    ])
  ])

export const slideInFromBottom: AnimationTriggerMetadata =
  trigger('slideInFromBottom', [
    transition(':enter', [
      style({ transform: 'translateY(100%)', opacity: 0 }),
      animate('0.8s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    transition(':leave', [
      animate('0.8s ease-in', style({ transform: 'translateY(100%)', opacity: 0 }))
    ])
  ]);

export const slideInFromTop: AnimationTriggerMetadata =
  trigger('slideInFromTop', [
    transition(':enter', [
      style({
        transform: 'translateY(-100%)',
        opacity: 0
      }),
      animate(
        '0.8s ease-out',
        style({
          transform: 'translateY(0)',
          opacity: 1
        })
      )
    ]),
    transition(':leave', [
      animate(
        '0.8s ease-in',
        style({
          transform: 'translateY(-100%)',
          opacity: 0
        })
      )
    ])
  ]);
