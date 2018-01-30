package com.liaoye.yuehu;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.liaoye.yuehu.utils.ActivityUtils;

import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "YueHu";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        //SplashScreen.show(this,true);
        super.onCreate(savedInstanceState);
        ActivityUtils.addActivity(this);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        ActivityUtils.removeActivity(this);
    }
}
