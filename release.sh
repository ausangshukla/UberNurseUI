# This generates the production apk
rm Connuct.apk
ionic cordova build --release android
# password is connuct
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore Connuct.keystore /home/thimmaiah/work/angular/UberNurseUI/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk Connuct
zipalign -v 4 /home/thimmaiah/work/angular/UberNurseUI/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk Connuct.apk
apksigner verify Connuct.apk 
