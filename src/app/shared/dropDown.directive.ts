import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropDown]'
})

export class dropDownDirective{

    @HostBinding('class.open') isopen=false;
    @HostListener('click')toggleopen(){

        this.isopen=!this.isopen

    }

}