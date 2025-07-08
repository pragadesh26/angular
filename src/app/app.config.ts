// ✅ Add these imports
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

export const appConfig = {
  providers: [
    // ✅ Existing ones
    importProvidersFrom(FormsModule), // ✅ This line enables [(ngModel)]
  ],
};
