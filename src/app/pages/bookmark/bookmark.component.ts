import { Component, OnDestroy } from '@angular/core';

@Component({
	selector: 'ngx-bookmark',
	templateUrl: './bookmark.component.html',
})
export class BookmarkComponent implements OnDestroy {
	protected bookmarks = [];

	constructor() {
		this.bookmarks = [{isBookmarked: true, isSelected: false}, {isBookmarked: true, isSelected: true}, {isBookmarked: true, isSelected: false}]
	}

	ngOnDestroy() {
	}
}
