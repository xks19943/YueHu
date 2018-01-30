package com.liaoye.yuehu.app;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.liaoye.yuehu.utils.ActivityUtils;


/**
 * Created by xiaoming on 2017/7/11.
 * 应用管理模块
 */

public class AppManageModule extends ReactContextBaseJavaModule {
    public AppManageModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "AppManageModule";
    }

    /**
     * 退出应用
     */
    @ReactMethod
    public void exitApp(){
        ActivityUtils.finishAllActivity();
    }
}
