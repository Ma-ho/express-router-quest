const express = require('express');
const fakeTags = require('../data/tags')
const fakePosts = require('../data/posts');

const router = express.Router({ mergeParams: true });

router.get('/', (req, res) => {
    res.json(fakeTags);
});

// Get a single tag
router.get('/:tagId/posts', (req, res) => {
	const tagId = Number(req.params.tagId);
    const foundPost = fakePosts.filter((post) => post.tag_ids.includes(tagId));
	if (!foundPost) {
		return res.status(404).json({
			error: 'Tag not found',
		});
	}
	return res.json(foundPost);
});

module.exports = router;