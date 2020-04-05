const tagsEl = document.querySelectorAll('.tag');
const projectsEl = document.querySelectorAll('.project');

tagsEl.forEach(tagEl => {
	tagEl.addEventListener('click', () => {
		const tag = tagEl.getAttribute('data-tag');

		clearTagsActiveClass();

		tagEl.classList.add('bg-purple-600');
		tagEl.classList.remove('bg-purple-300');

		projectsEl.forEach(project => {
			const projectTags = project.getAttribute('data-tags').split(',');
			let show = false;
			projectTags.forEach(projectTag => {
				if (tag === projectTag) {
					show = true;
				}
            });
            
			if (tag === 'all' || show) {
				project.classList.remove('hidden');
				project.classList.add('fadeIn');
			} else {
				project.classList.add('hidden');
				project.classList.remove('fadeIn');
			}
		});
	});
});

function clearTagsActiveClass() {
	tagsEl.forEach(tagEl => {
		tagEl.classList.remove('bg-purple-600');
		tagEl.classList.add('bg-purple-300');
	});
}