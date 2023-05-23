
// 182 xazidan

student personal-details

<div class="form-group">
                        <label class="tu-label"><?php esc_html_e('Learning location preference', 'tuturn'); ?></label>
                        <ul class="tu-status-filter">
                            <li>
                                <div class="tu-status-contnent">
                                    <div class="tu-check tu-checksm">
                                        <input id="home" type="checkbox" name="teaching_preference[]" value="home" <?php if(!empty($teaching_preference) && is_array($teaching_preference) && in_array('home', $teaching_preference)){ echo esc_attr('checked'); } ?>>
                                        <label for="home"><?php esc_html_e('My Place', 'tuturn'); ?></label>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="tu-status-contnent">
                                    <div class="tu-check tu-checksm">
                                        <input id="student_home" type="checkbox" name="teaching_preference[]" value="student_home" <?php if(!empty($teaching_preference) && is_array($teaching_preference) && in_array('student_home', $teaching_preference)){ echo esc_attr('checked'); } ?>>
                                        <label for="student_home"><?php esc_html_e('Teacher\'s home', 'tuturn'); ?></label>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="tu-status-contnent">
                                    <div class="tu-check tu-checksm">
                                        <input id="online" type="checkbox" name="teaching_preference[]" value="online" <?php if(!empty($teaching_preference) && is_array($teaching_preference) && in_array('online', $teaching_preference)){ echo esc_attr('checked'); } ?>>
                                        <label for="online"><?php esc_html_e('Online', 'tuturn'); ?></label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div> 


                    <div class="tu-check tu-checksm">
                                                <input class="tu-offline_type-se" id="<?php echo esc_attr($plcace_key); ?>" type="checkbox" name="offline_place[]" value="<?php echo esc_attr($plcace_key); ?>" <?php if (!empty($db_offline_tutor_place) && is_array($db_offline_tutor_place) && in_array($plcace_key, $db_offline_tutor_place)) {
                                                echo esc_attr('checked');
                                            } ?>>
                                                <label for="<?php echo esc_attr($plcace_key); ?>"><?php echo esc_html($place_val); ?></label>
                                            </div>

                                            