/***********************************************************************************************
 * The purpose of renameSheets() is to rename the sheets inside each Day database worksheet.   *
 *                                                                                             *
 * It is not necessary to run this script again, because the sheets have already been renamed. *
 * This script is provided for reference only.                                                 *
***********************************************************************************************/

function renameSheets() {

    let daySheetIds = ['1zfk7plACYxlfcO-3tgDXiYgk4FkObANmBCZpWSHPAiA', '1vXF5H9zBCJN66_DapU_L8bIOR2Wn3nv5YwOCMa258Ls', '1BYsxEHFS7_bn0mubAgyKrXBvAjdslLTSn2Nl97ESItg', '1PDzsPenE-NpCXT9SPVgVMcnxjekkSwhdZX6qpFasogQ', '10nh58NFaz4OuBUVkacjG5OX6y5zhxQ7q194B0udIBFg', '13tUMb8XZwN_ZnRnt3IE44dj9QarUc-f-Lx-L8aDWyDk']

    let oldSheetNames = [
        'Females-25 M Assisted Walk',
        'Females-25 M Assisted Device',
        'Females-25 M Assisted WC',
        'Females-25 M Manual WC',
        'Females-30 M Slalom',
        'Females-50 M Run',
        'Females-50 M Manual WC',
        'Females-100 M Run',

        'Females-Turbo Jav',
        'Females-Foam Turbo Jav',
        'Females-Running Long Jump',
        'Females-Softball Throw',
        'Females-Tennis Ball Throw',
        'Females-Bean Bag Throw',

        'Males-25 M Assisted Walk',
        'Males-25 M Assisted Device',
        'Males-25 M Assisted WC',
        'Males-25 M Manual WC',
        'Males-30 M Slalom',
        'Males-50 M Run',
        'Males-50 M Manual WC',
        'Males-100 M Run',

        'Males-Turbo Jav',
        'Males-Tennis Ball Throw',
        'Males-Softball Throw',
        'Males-Running Long Jump',
        'Males-Foam Turbo Jav',
        'Males-Bean Bag Throw'

    ]

    let newSheetNames = [
        'Females-25 M WALK',
        'Females-25 M DEVICE',
        'Females-25 M WC-ASSISTED',
        'Females-25 M MANUAL WC',
        'Females-30 M SLALOM',
        'Females-50 MD',
        'Females-50 M WC',
        'Females-100 MD',

        'Females-TURBO JAV',
        'Females-FOAM TURBOJAV',
        'Females-RUNNING LJ',
        'Females-SOFTBALL',
        'Females-TENNIS BALL THROW',
        'Females-BEAN BAG THROW',

        'Males-25 M WALK',
        'Males-25 M DEVICE',
        'Males-25 M WC-ASSISTED',
        'Males-25 M MANUAL WC',
        'Males-30 M SLALOM',
        'Males-50 MD',
        'Males-50 M WC',
        'Males-100 MD',

        'Males-TURBO JAV',
        'Males-TENNIS BALL THROW',
        'Males-SOFTBALL',
        'Males-RUNNING LJ',
        'Males-FOAM TURBOJAV',
        'Males-BEAN BAG THROW'

    ]

    for (let i = 0; i < daySheetIds.length; i++) {
    let daySheet = SpreadsheetApp.openById(daySheetIds[i]);
    for (let j = 0; j < oldSheetNames.length; j++) {
        let sheet = daySheet.getSheetByName(oldSheetNames[j]);
        if (sheet) { // Check if the sheet exists
            sheet.setName(newSheetNames[j]);
        } else {
            console.log('Sheet ' + oldSheetNames[j] + ' not found');
        }
    }
    }

}