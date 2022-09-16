package th.co.locus.capacitor.screenorientation;

import android.content.res.Configuration;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin(name = "ScreenOrientation")
public class ScreenOrientationPlugin extends Plugin {

    public static final String SCREEN_ORIENTATION_CHANGE_EVENT = "screenOrientationChange";

    private ScreenOrientation implementation;

    @Override
    public void load() {
        implementation = new ScreenOrientation(getBridge());
        implementation.setOrientationChangeListener(this::updateOrientation);
    }

    @PluginMethod
    public void lock(PluginCall call) {
        String orientationType = call.getString("type");
        implementation.lock(orientationType);
        call.success();
    }

    @PluginMethod
    public void unlock(PluginCall call) {
        implementation.unlock();
        call.success();
    }

    @PluginMethod
    public void getCurrentOrientation(PluginCall call) {
        JSObject ret = new JSObject();
        String orientationType = implementation.getCurrentOrientationType();
        ret.put("type", orientationType);
        call.success(ret);
    }

    private void updateOrientation() {
        JSObject ret = new JSObject();
        String orientationType = implementation.getCurrentOrientationType();
        ret.put("type", orientationType);
        notifyListeners(SCREEN_ORIENTATION_CHANGE_EVENT, ret);
    }

}
