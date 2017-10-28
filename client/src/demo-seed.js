import mori from 'mori'

export const projects = mori.vector(
  'Capstone',
  'Techtalk',
  'Cleanup',
  'Online Learning',
  'Exercise'
)

const block1 = mori.hashMap(
  'id', 1,
  'description', 'Prepare presentation',
  'duration', 1800,
  'priority', 2,
  'projectId', 2,
  'pinned', false,
  'recurrence', null
)

const block2 = mori.hashMap(
  'id', 2,
  'description', 'Prepare code example',
  'duration', 10800,
  'priority', 3,
  'projectId', 1,
  'pinned', false,
  'recurrence', null
)

const block3 = mori.hashMap(
  'id', 3,
  'description', 'Pack a box of book',
  'duration', 2700,
  'priority', 12,
  'projectId', 3,
  'pinned', false,
  'recurrence', null
)

const block4 = mori.hashMap(
  'id', 4,
  'description', 'Watch Intro to CS',
  'duration', 3600,
  'priority', 4,
  'projectId', 4,
  'pinned', false,
  'recurrence', null
)

const block5 = mori.hashMap(
  'id', 5,
  'description', 'Capstone Research',
  'duration', 11600,
  'priority', 1,
  'projectId', 1,
  'pinned', false,
  'recurrence', null
)

const block6 = mori.hashMap(
  'id', 6,
  'description', 'Career Prep',
  'duration', 7500,
  'priority', 7,
  'projectId', null,
  'pinned', false,
  'recurrence', null
)

const block7 = mori.hashMap(
  'id', 15,
  'description', 'Appointment',
  'duration', 3600,
  'priority', 10,
  'projectId', null,
  'pinned', true,
  'recurrence', null
)

const lunch = mori.hashMap(
  'id', 100,
  'description', 'Lunch Break',
  'duration', 3600,
  'priority', -1,
  'projectId', null,
  'pinned', true,
  'recurrence', mori.hashMap(
      'frequency', 'daily',
      'until', null,
      'occurence', null,
      'start', 43200
    )
)

export const blocks = mori.hashMap(
  block1.id, block1,
  block2.id, block2,
  block3.id, block3,
  block4.id, block4,
  block5.id, block5,
  block6.id, block6,
  block7.id, block7,
  lunch.id, lunch
)
