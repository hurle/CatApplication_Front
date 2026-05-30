import { Directive, HostListener, ElementRef } from '@angular/core'

@Directive({
    selector: '[onlyNumbers]',
    standalone: true
})

export class OnlyNumbersDirective{
    constructor(private el: ElementRef<HTMLInputElement>){}
    // Event to prevent e and symbols en input number 
    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent): void {
        const notAlowedKeys = ['e','E','+','-'];
        if(notAlowedKeys.includes(event.key)){
            event.preventDefault();
        }
    }
    // Event for copy pastes
    @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent): void {
        const clipboard = event.clipboardData;
        const pasteTxt = clipboard ? clipboard.getData('text') : ''

        if(/[eE\+\-]/.test(pasteTxt)) {
            event.preventDefault();
        }
        // Logic for clean clipboard
        const pasteTxtClean = pasteTxt.replace(/[eE\+\-]/g,'');
        if(pasteTxtClean){
            const input = this.el.nativeElement;
            const start = input.selectionStart ?? 0;
            const end = input.selectionEnd ?? 0;
            const currentValue = input.value;
            // Insert text in position of txt 
            input.value = currentValue.slice(0,start) + pasteTxtClean + currentValue.slice(end);
            input.selectionStart = input.selectionEnd = start + pasteTxtClean.length;
            // close event
            input.dispatchEvent(new Event('input'));
        }
    }
}