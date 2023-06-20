function UploadCtrl($scope, $firebaseStorage, $firebaseObject) {

    let fileToUpload = null;
    $scope.onChange = function onChange(fileList) {
        fileToUpload = fileList[0];
    };
    $scope.upload = function () {
        if (fileToUpload) {
            let storageRef = firebase.storage().ref(fileToUpload.name);
            let storage = $firebaseStorage(storageRef);
            let uploadTask = storage.$put(fileToUpload);
            uploadTask.$complete((snapshot) => {
                let ref = firebase.database().ref("Files");
                let pushKey = ref.push().key;
                let formData = $firebaseObject(ref.child(pushKey));
                formData.name = fileToUpload.name;
                formData.timestamp = firebase.database.ServerValue.TIMESTAMP;
                formData.url = snapshot.downloadURL;
                window.alert('Il file è stato caricato con successo!');
                formData.$save().then(() => {
                    angular.element("input[type='file']").val(null);
                    fileToUpload = null;
                    window.alert('Il file è stato caricato con successo!');
                })
            });
        }
    }
}

angular.module('app').controller('UploadCtrl', UploadCtrl)