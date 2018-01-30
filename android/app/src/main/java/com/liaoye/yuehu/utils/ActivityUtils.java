package com.liaoye.yuehu.utils;

import android.app.Activity;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by xiaoming on 2017/7/11.
 */

public class ActivityUtils {
    public static List<Activity> activityList = new ArrayList<>();

    public static void addActivity(Activity activity){
        activityList.add(activity);

    }

    public static void removeActivity(Activity activity){
        activityList.remove(activity);
    }


    /**
     * 完全退出应用
     */
    public static void finishAllActivity(){
        for (Activity activity:activityList) {
            if(!activity.isFinishing()){
                activity.finish();
            }
        }
        android.os.Process.killProcess(android.os.Process.myPid());
    }

}
