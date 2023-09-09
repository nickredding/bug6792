## Created to demonstrate Capacitor bugs 6792, 6856, 6821 and 6860

This app provides test cases for each of these bug reports.

Bug 6792: on Android, use the Test buttons to see the result of posting data

Bug 6856: on Android, use the Test button to see the effect of setting cookies from two distinct domains. Then requesting the cookies from one of the domains returns all of them. This is wrong.

Bug 6821: On iOS, use the Test button for Bug 6856 to set cookies. Then use the Test button for Bug 6821 to retrieve the expiry dates for these cookies. You will see that he expiry dates are correct.

Bug 6860: On iOS and Android, use the Test button to see that setting a cookie via setCookie or deleting a cookie via deleteCookie does not update document.cookie, although the cookies are indeed deleted since the test checks that via the server.

Bug 6885: On iOS, use the Test button to receive an HttpOnly cookie and see that it is added to document.cookie

### Running this app

To run the app, copy the files and then add Capacitor core, cli and Android/iOS.

