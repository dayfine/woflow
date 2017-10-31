import mori from 'mori'

export const projects = [
  {id: 1, name: 'Capstone'},
  {id: 2, name: 'Techtalk'},
  {id: 3, name: 'Cleanup'},
  {id: 4, name: 'Online Learning'},
  {id: 5, name: 'Exercise'}
]

const block1 = mori.hashMap(
  'id', 1,
  'description', 'Prepare presentation',
  'duration', 0.5,
  'priority', 2,
  'projectId', 2,
  'pinned', false,
  'recurrence', null
)

const block2 = mori.hashMap(
  'id', 2,
  'description', 'Prepare code example',
  'duration', 4,
  'priority', 3,
  'projectId', 1,
  'pinned', false,
  'recurrence', null
)

const block3 = mori.hashMap(
  'id', 3,
  'description', 'Pack a box of book',
  'duration', 0.75,
  'priority', 12,
  'projectId', 3,
  'pinned', false,
  'recurrence', null
)

const block4 = mori.hashMap(
  'id', 4,
  'description', 'Watch Intro to CS',
  'duration', 1,
  'priority', 4,
  'projectId', 4,
  'pinned', false,
  'recurrence', null
)

const block5 = mori.hashMap(
  'id', 5,
  'description', 'Capstone Research',
  'duration', 2.75,
  'priority', 1,
  'projectId', 1,
  'pinned', false,
  'recurrence', null
)

const block6 = mori.hashMap(
  'id', 6,
  'description', 'Career Prep',
  'duration', 2.5,
  'priority', 7,
  'projectId', null,
  'pinned', false,
  'recurrence', null
)

const block7 = mori.hashMap(
  'id', 15,
  'description', 'Appointment',
  'duration', 1,
  'priority', 10,
  'projectId', null,
  'pinned', true,
  'recurrence', null
)

const lunch = mori.hashMap(
  'id', 100,
  'description', 'Lunch Break',
  'duration', 1,
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
  mori.get(block1, 'id'), block1,
  mori.get(block2, 'id'), block2,
  mori.get(block3, 'id'), block3,
  mori.get(block4, 'id'), block4,
  mori.get(block5, 'id'), block5,
  mori.get(block6, 'id'), block6,
  mori.get(block7, 'id'), block7,
  mori.get(lunch, 'id'), lunch
)
