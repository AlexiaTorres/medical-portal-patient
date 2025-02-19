import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';

import {AdminComponent} from './admin.component';
import {Dashboard1Component} from './dashboard1/dashboard1.component';
import {DataFormComponent as PersonalData} from './personal-data/data-form.component';
import {AppointmentsComponent} from './appointments/appointments.component';
import {PatientComponent} from './patient/patient.component';
import {HistoryComponent} from './history/history.component';
import {HistoryPDFComponent} from './history/pdf-viewer.component';
import {NewAppointmentComponent} from './appointments/new-appointment.component';
import {AppointmentConfirmationComponent} from "./appointments/appointment-confirmation.component";
import {TestFormComponent} from './personal-data/test-form.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'admin',
                component: AdminComponent,
                children: [
                    {
                        path: '',
                        component: Dashboard1Component
                    },
                    {
                        path: 'dashboard',
                        component: Dashboard1Component
                    },
                    {
                        path: 'new-appointment/confirmation',
                        component: AppointmentConfirmationComponent
                    },
                    {
                        path: 'personal-data',
                        component: PersonalData
                    },
                    {
                        path: 'patient',
                        component: PatientComponent
                    },
                    {
                        path: 'appointments',
                        component: AppointmentsComponent
                    },
                    {
                        path: 'new-appointment',
                        component: NewAppointmentComponent
                    },
                    {
                        path: 'my-history',
                        component: HistoryComponent
                    },
                    {
                        path: 'my-history/case-HWDE000183',
                        component: HistoryPDFComponent
                    }
                    ,
                    {
                        path: 'test',
                        component: TestFormComponent
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {
}
