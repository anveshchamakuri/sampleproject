import { style } from '@angular/core';
/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */

import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightStudent]'
})
export class HighlightStudentDirective {

	constructor(private el: ElementRef) {
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('gray');
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(null);
		this.el.nativeElement.style.color= 'black';
	}

	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
		this.el.nativeElement.style.color= 'white';
	}
}

/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */