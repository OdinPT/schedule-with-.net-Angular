import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MemberDetailComponent } from '../members/member-detail/member-detail.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<MemberDetailComponent> {
    canDeactivate(component: MemberDetailComponent) {
        if (component.editForm.dirty) {
            return confirm('Tem a certeza? Vai perder todas as alterações!');
        }
        return true;
    }
}