const timeline = document.getElementById('timeline');

const meetings = [
    {
        date: 'September 30, 2024',
        notes: '-discussed with Professor Chul Min Yeum regarding the scope of the project\
        -emphasized the importance of ',
        links: [
            { text: 'Project Roadmap', url: '#' },
            { text: 'Sprint Tasks', url: '#' }
        ]
    },
    {
        date: 'May 8, 2023',
        notes: 'Reviewed progress on sprint tasks and addressed blockers.',
        links: [
            { text: 'Progress Report', url: '#' },
            { text: 'Blocker List', url: '#' }
        ]
    },
    {
        date: 'May 15, 2023',
        notes: 'Sprint retrospective and planning for the next sprint.',
        links: [
            { text: 'Retrospective Notes', url: '#' },
            { text: 'Next Sprint Plan', url: '#' }
        ]
    }
];

function createTimelineItem(meeting, index) {
    const timelineItem = document.createElement('div');
    timelineItem.classList.add('timeline-item');
    timelineItem.classList.add(index % 2 === 0 ? 'left' : 'right');

    const content = document.createElement('div');
    content.classList.add('content');

    const date = document.createElement('div');
    date.classList.add('meeting-date');
    date.textContent = meeting.date;

    const notes = document.createElement('div');
    notes.classList.add('meeting-notes');
    notes.textContent = meeting.notes;

    const links = document.createElement('div');
    links.classList.add('meeting-links');

    meeting.links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.text;
        links.appendChild(a);
    });

    content.appendChild(date);
    content.appendChild(notes);
    content.appendChild(links);
    timelineItem.appendChild(content);

    return timelineItem;
}

function populateTimeline() {
    meetings.forEach((meeting, index) => {
        const timelineItem = createTimelineItem(meeting, index);
        timeline.appendChild(timelineItem);
    });
}

populateTimeline();