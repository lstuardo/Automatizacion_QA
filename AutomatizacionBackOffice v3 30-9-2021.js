describe('Visitar BackOffice', function(){

    let correo = 'e_htapia@smu.cl'
    let pass = 'TestingQA1234!'
        

    it('visit()', function(){
        Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
        cy.visit('https://backend-smu.preprod.geopagos.com/login')
        cy.viewport(1366, 768)
        cy.wait(2000)

        // Credenciales Erroneas
        //cy.get('#login_email').type(correo)
        //cy.wait(2000)
        //cy.get('#login_password').type('Smu1233.')
        //cy.wait(2000)
        //cy.get('#login_login').click()
        //cy.wait(2000)
        //cy.get('.login-error-message').contains('El usuario o contraseña ingresado son incorrectos')
        
        // Re intento credenciales Erroneas
        //cy.get('#login_email').clear().type(correo)
        //cy.get('#login_password').clear().type('Smu1233.')
        //cy.get('#login_login').click()
        //cy.wait(4000)
        //cy.get('.login-error-message').contains('El usuario o contraseña ingresado son incorrectos')
        

        // Ingreso Correcto
        //cy.get('.pull-left').should('.pull-left').visible
        cy.get(':nth-child(2) > .input-group > .form-control')
        cy.wait(2000)
        cy.get('#login_email').click().clear().type(correo)
        cy.wait(2000)
        cy.get('#login_password').click().clear().type(pass)
        cy.wait(2000)
        cy.get('#login_login').click()
        cy.wait(2000)
        cy.get('.nav > :nth-child(1) > .badge').should('have.text','Homero Tapia')
        cy.wait(2000)

        // Configuracion
        cy.get('.nav > :nth-child(1) > a').click()
        cy.wait(4000)
        cy.get(':nth-child(1) > div.col-md-6 > .switch > .switch-label').click()
        cy.wait(4000)
        cy.get('#configurations_minimalIosVersion').click().clear().type('0')
        cy.wait(4000)
        cy.get('#configurations_minimalAndroidVersion').click().clear().type('0')
        cy.wait(4000)
        cy.get('#configurations_invoiceEmails').click().clear().type('tapiajeriahomero@gmail.com')
        cy.wait(4000)
        cy.get('#configurations_defaultPointOfSale').click().clear().type('0001')
        cy.wait(4000)
        cy.get('#configurations_save').click()

        // Auditoria
        cy.get('.sidebar-collapse > .nav > :nth-child(2) > a').click()
        cy.wait(4000)
        cy.get('#daterangefrom').click()
        cy.wait(2000)
        cy.get('.datepicker-days > .table-condensed > tbody > :nth-child(1) > :nth-child(1)').click()
        cy.wait(4000)
        cy.get('#daterangeto').click()
        cy.wait(4000)
        cy.get('.table-condensed > tbody > :nth-child(5) > :nth-child(4)').click()
        cy.wait(4000)
        cy.get('.col-sm-8 > .selectize-control > .selectize-input').click().type('Homero{enter}')
        cy.wait(4000)
        cy.get(':nth-child(2) > .btn').click()
        cy.wait(4000)
        cy.get('.col-sm-3 > .selectize-control > .selectize-input > .item').click().type('{backspace}10{enter}')
        cy.wait(4000)
        cy.get(':nth-child(2) > .btn').click()
        cy.wait(4000)
        cy.get('#DataTables_Table_0_info').should('be.visible','Mostrando registros del 1 al 10')
        cy.wait(4000)
        cy.get('.col-sm-3 > .selectize-control > .selectize-input').click().type('{backspace}20{enter}')
        cy.wait(4000)
        cy.get(':nth-child(2) > .btn').click()
        cy.wait(4000)
        cy.get('#DataTables_Table_0_info').should('be.visible','Mostrando registros del 1 al 20')
        cy.wait(4000)
        cy.get('.col-sm-3 > .selectize-control > .selectize-input').click().type('{backspace}50{enter}')
        cy.wait(4000)
        cy.get(':nth-child(2) > .btn').click()
        cy.wait(4000)
        cy.get('#DataTables_Table_0_info').should('be.visible','Mostrando registros del 1 al 50')
        cy.wait(4000)
        cy.get('.col-sm-3 > .selectize-control > .selectize-input').click().type('{backspace}100{enter}')
        cy.wait(4000)
        cy.get(':nth-child(2) > .btn').click()
        cy.wait(4000)
        cy.get('#DataTables_Table_0_info').should('be.visible','Mostrando registros del 1 al 100')
        cy.wait(4000)
        cy.get('.col-sm-3 > .selectize-control > .selectize-input').click().type('{backspace}500{enter}')
        cy.wait(4000)
        cy.get(':nth-child(2) > .btn').click()
        cy.wait(4000)
        cy.get('#DataTables_Table_0_info').should('be.visible','Mostrando registros del 1 al 500')
        cy.wait(2000)
        cy.get(':nth-child(12) > a').click()
        cy.wait(2000)
        cy.get('.sidebar-collapse > .nav > :nth-child(2) > a').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > .btn').click()
        cy.wait(2000)
        cy.get('#downloadButton').click()
        cy.wait(2000)
        cy.get('#modalCancel').click()
        //cy.get('#modalSubmit').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > .btn').click()
        cy.wait(2000)
        //cy.get(':nth-child(12) > a').click()

        
         //Administradores
         cy.get(':nth-child(3) > a > .hidden-sm').click()
         cy.wait(4000)
         cy.get('.col-lg-3 > .btn').click()
         cy.wait(4000)
         cy.get('#name').click().clear().type('Pruebas Automatizadas')
         cy.wait(4000)
         cy.get('#email').click().clear().type('tapiajeriahomero@gmail.com')
         cy.wait(4000)
         cy.get('#password').click().clear().type('TestingQA1234!')
         cy.wait(4000)
         cy.get('#passwordExpirationDays').click().clear().type('365')
         cy.wait(4000)
         cy.get(':nth-child(5) > .col-md-9 > .selectize-control > .selectize-input').click().type('{backspace}Admi{enter}')
         cy.wait(4000)
         cy.get(':nth-child(6) > .col-md-9 > .selectize-control > .selectize-input').click().type('{backspace}Desh{enter}')
         cy.wait(4000)
         cy.get('#submitAdministrator').click()
         cy.wait(4000)
         cy.get(':nth-child(3) > .active').click()
         cy.wait(4000)
         cy.get('#DataTables_Table_0_filter > label > .form-control').click().clear().type('Prueb{enter}')
         cy.wait(4000)
         cy.get('.btn-info').click()
         cy.wait(4000)
         cy.get(':nth-child(5) > .col-md-9 > .selectize-control > .selectize-input').click().type('{backspace}Habi{enter}')
         cy.wait(4000)
         cy.get('#submitAdministrator').click()
         cy.wait(4000)
         cy.get(':nth-child(3) > .active').click()
         cy.wait(4000)
         cy.get('#DataTables_Table_0_filter > label > .form-control').click().clear().type('Prueb{enter}')
         cy.wait(4000)
         cy.get('.btn-danger').click()
         cy.wait(4000)
         cy.get(':nth-child(2) > .swal-button').click()
         cy.wait(4000)

        //Roles
        cy.get(':nth-child(4) > a > .hidden-sm').click()
        cy.wait(4000)
        cy.get('.col-lg-4 > .btn').click()
        cy.wait(4000)
        cy.get('#name').click().clear().type('Pruebas QA')
        cy.wait(2000)
            //Permisos Administradores
        cy.get(':nth-child(2) > :nth-child(1) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > :nth-child(1) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > :nth-child(1) > .panel > .panel-body > :nth-child(3) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > :nth-child(1) > .panel > .panel-body > :nth-child(4) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > :nth-child(1) > .panel > .panel-body > :nth-child(5) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Lectores
        cy.get(':nth-child(2) > :nth-child(2) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > :nth-child(2) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > :nth-child(2) > .panel > .panel-body > :nth-child(3) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > :nth-child(2) > .panel > .panel-body > :nth-child(4) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > :nth-child(2) > .panel > .panel-body > :nth-child(5) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(2) > :nth-child(2) > .panel > .panel-body > :nth-child(6) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Comercios
        cy.get(':nth-child(3) > :nth-child(1) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > :nth-child(1) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > :nth-child(1) > .panel > .panel-body > :nth-child(3) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > :nth-child(1) > .panel > .panel-body > :nth-child(4) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > :nth-child(1) > .panel > .panel-body > :nth-child(5) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Transacciones
        cy.get(':nth-child(3) > :nth-child(2) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > :nth-child(2) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > :nth-child(2) > .panel > .panel-body > :nth-child(3) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > :nth-child(2) > .panel > .panel-body > :nth-child(4) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > :nth-child(2) > .panel > .panel-body > :nth-child(5) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Sucursales
        cy.get(':nth-child(4) > :nth-child(1) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > :nth-child(1) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > :nth-child(1) > .panel > .panel-body > :nth-child(3) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > :nth-child(1) > .panel > .panel-body > :nth-child(4) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > :nth-child(1) > .panel > .panel-body > :nth-child(5) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .panel > .panel-body > :nth-child(6) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Usuarios
        cy.get(':nth-child(4) > :nth-child(2) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > :nth-child(2) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > :nth-child(2) > .panel > .panel-body > :nth-child(3) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > :nth-child(2) > .panel > .panel-body > :nth-child(4) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > :nth-child(2) > .panel > .panel-body > :nth-child(5) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > :nth-child(2) > .panel > .panel-body > :nth-child(6) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Roles
        cy.get(':nth-child(5) > :nth-child(1) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(5) > :nth-child(1) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(5) > :nth-child(1) > .panel > .panel-body > :nth-child(3) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(5) > :nth-child(1) > .panel > .panel-body > :nth-child(4) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Dispositivos
        cy.get(':nth-child(5) > :nth-child(2) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(5) > :nth-child(2) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Auditoria 
        cy.get(':nth-child(6) > :nth-child(1) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(6) > :nth-child(1) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Configuracion 
        cy.get(':nth-child(6) > :nth-child(2) > .panel > .panel-body > .form-group > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Reportes 
        cy.get(':nth-child(7) > :nth-child(1) > .panel > .panel-body > .form-group > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Depositos
        cy.get(':nth-child(7) > :nth-child(2) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(7) > :nth-child(2) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)    
            //Permisos Acuerdos
        cy.get(':nth-child(8) > :nth-child(1) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(8) > :nth-child(1) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(8) > :nth-child(1) > .panel > .panel-body > :nth-child(3) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(8) > :nth-child(1) > .panel > .panel-body > :nth-child(4) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Reporte Contable
        cy.get(':nth-child(8) > :nth-child(2) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(8) > :nth-child(2) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Codigos Comercios
        cy.get(':nth-child(9) > :nth-child(1) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(9) > :nth-child(1) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(9) > :nth-child(1) > .panel > .panel-body > :nth-child(3) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(9) > :nth-child(1) > .panel > .panel-body > :nth-child(4) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Feriados
        cy.get(':nth-child(9) > :nth-child(2) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(9) > :nth-child(2) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(9) > :nth-child(2) > .panel > .panel-body > :nth-child(3) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(9) > :nth-child(2) > .panel > .panel-body > :nth-child(4) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Planes de Pago
        cy.get(':nth-child(10) > :nth-child(1) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(10) > :nth-child(1) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(10) > :nth-child(1) > .panel > .panel-body > :nth-child(3) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(10) > :nth-child(1) > .panel > .panel-body > :nth-child(4) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Cuotas
        cy.get(':nth-child(10) > :nth-child(2) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(10) > :nth-child(2) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(10) > :nth-child(2) > .panel > .panel-body > :nth-child(3) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(10) > :nth-child(2) > .panel > .panel-body > :nth-child(4) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Conciliaciones
        cy.get(':nth-child(11) > :nth-child(1) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(11) > :nth-child(1) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Control de Fraude
        cy.get(':nth-child(11) > :nth-child(2) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(11) > :nth-child(2) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Facturacion
        cy.get(':nth-child(12) > :nth-child(1) > .panel > .panel-body > .form-group > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Archivo de Depositos
        cy.get(':nth-child(12) > :nth-child(2) > .panel > .panel-body > .form-group > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Alertas
        cy.get(':nth-child(13) > :nth-child(1) > .panel > .panel-body > .form-group > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Contracargos
        cy.get(':nth-child(13) > :nth-child(2) > .panel > .panel-body > :nth-child(1) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
        cy.get(':nth-child(13) > :nth-child(2) > .panel > .panel-body > :nth-child(2) > .col-md-6 > .switch > .switch-label').click()
        cy.wait(1000)
            //Permisos Archivo respuesta de Depositos
        cy.get(':nth-child(14) > :nth-child(1) > .panel > .panel-body > .form-group > .col-md-6').click()
        cy.wait(1000)
            //Guardar cambios en Roles
        cy.get('.btn-success').click()
        cy.wait(4000)
        cy.get(':nth-child(4) > .active').click()
        cy.wait(4000)
        cy.get('#DataTables_Table_0_filter > label > .form-control').click().clear().type('Prueb{enter}')
        cy.wait(4000)
        cy.get('.btn-danger').click()
        cy.wait(4000)
        cy.get(':nth-child(2) > .swal-button').click()
        cy.wait(4000)

        // Roles
        cy.get(':nth-child(4) > .active').click()
        cy.wait(4000)

    
        //Reportes
        cy.get(':nth-child(5) > a > .hidden-sm').click()
        cy.wait(2000)
        cy.get('.selectize-input').click().type('Dep{enter}')
        cy.wait(2000)
        cy.get('#reports_filter_submit').click()
        cy.wait(2000)
        cy.get('.selectize-input').click().type('{backspace}Com{enter}')
        cy.wait(2000)
        cy.get('#reports_filter_submit').click()
        cy.wait(2000)
        cy.get('.selectize-input').click().type('{backspace}Tran{enter}')
        cy.wait(2000)
        cy.get('#reports_filter_submit').click()
        cy.wait(2000)
        

        //Depositos
        cy.get(':nth-child(6) > a > .hidden-sm').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > .quick-button').click()
        cy.wait(2000)
        cy.get('#form_filters_start_date').click()
        cy.wait(2000)
        cy.get('.datepicker-days > .table-condensed > thead > :nth-child(1) > .prev').click()
        cy.wait(2000)
        cy.get('.datepicker-days > .table-condensed > tbody > :nth-child(1) > :nth-child(1)').click()
        cy.wait(2000)
        cy.get('#form_filters_end_date').click()
        cy.wait(2000)
        cy.get(':nth-child(6) > :nth-child(7)').click()
        cy.wait(2000)
        cy.get('#form_filters_download').click()
        cy.wait(2000)
        cy.get(':nth-child(5) > a > .hidden-sm').click()
        cy.wait(2000)
        cy.get('[aria-label="Fecha de Creación: Activar para ordenar la columna de manera ascendente"]').click()
        cy.wait(2000)
        cy.get('.sorting_asc').click()
        cy.wait(2000)
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text','Depósitos')
        cy.wait(4000)
        cy.get('.nav > :nth-child(6) > a').click()
        cy.wait(2000)
        cy.get(':nth-child(1) > :nth-child(2) > .form-group > .col-md-9 > .selectize-control > .selectize-input').click().type('Café').wait(1000).type('{enter}')
        cy.wait(2000)
        cy.get(':nth-child(2) > :nth-child(2) > .form-group > .col-md-9 > .selectize-control > .selectize-input').click().type('{backspace}CS{enter}')
        cy.wait(2000)
        cy.get(':nth-child(3) > :nth-child(2) > .form-group > .col-md-9 > .selectize-control').click().type('Santan{enter}')
        cy.wait(2000)
        cy.get('#form_filters_download').click()
        cy.wait(2000)
        cy.get(':nth-child(5) > a > .hidden-sm').click()
        cy.wait(2000)
        cy.get('[aria-label="Fecha de Creación: Activar para ordenar la columna de manera ascendente"]').click()
        cy.wait(2000)
        cy.get('.sorting_asc').click()
        cy.wait(2000)
        cy.get('tbody > :nth-child(1) > :nth-child(3)').should('be.visible','.CSV')
        cy.wait(2000)
        cy.get(':nth-child(6) > a > .hidden-sm').click()
        cy.wait(4000)
        
        //Reporte Contable
        cy.get(':nth-child(7) > a > .hidden-sm').click()
        cy.wait(2000)
        cy.get('#form_filters_start_date').click()
        cy.wait(2000)
        cy.get('.datepicker-days > .table-condensed > thead > :nth-child(1) > .prev').click()
        cy.wait(2000)
        cy.get('.datepicker-days > .table-condensed > tbody > :nth-child(1) > :nth-child(1)').click()
        cy.wait(2000)
        cy.get('#form_filters_download').click()



            //Cierre sesion BackOffice
        cy.get('.cpointer > .fa').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > .swal-button').click()
        cy.wait(3000)

        cy.reload()
        


    })
})