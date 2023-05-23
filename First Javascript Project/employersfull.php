<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
extract( $args );

global $post;
if ( empty($post->post_type) || $post->post_type != 'employer' ) {
    return;
}
$user_id = WP_Job_Board_Pro_User::get_user_by_employer_id($post->ID);
$author_email = WP_Job_Board_Pro_Employer::get_display_email( $post );
if ( ! empty( $author_email ) ) :
	extract( $args );
	extract( $instance );

	echo trim($before_widget);
	
	$title = !empty($instance['title']) ? sprintf($instance['title'], $post->post_title) : '';
	$title = apply_filters('widget_title', $title);

	if ( $title ) {
	    echo trim($before_title)  . trim( $title ) . $after_title;
	}

	$email = $phone = '';
	if ( is_user_logged_in() ) {
		$current_user_id = get_current_user_id();

		if ( WP_Job_Board_Pro_User::is_employer() ) {
			$employer_id = WP_Job_Board_Pro_User::get_employer_by_user_id($current_user_id);
			$phone = WP_Job_Board_Pro_Employer::get_display_phone( $employer_id );
			$email = WP_Job_Board_Pro_Employer::get_post_meta($employer_id, 'email', true);
		} elseif ( method_exists('WP_Job_Board_Pro_User', 'is_employee') && WP_Job_Board_Pro_User::is_employee($user_id) ) {
			$user_id = WP_Job_Board_Pro_User::get_user_id();
			$employer_id = WP_Job_Board_Pro_User::get_employer_by_user_id($user_id);
			$phone = WP_Job_Board_Pro_Employer::get_post_meta($employer_id, 'phone', true);
			$email = WP_Job_Board_Pro_Employer::get_post_meta($employer_id, 'email', true);
		} elseif( WP_Job_Board_Pro_User::is_candidate() ) {
			$candidate_id = WP_Job_Board_Pro_User::get_candidate_by_user_id($current_user_id);
			$phone = WP_Job_Board_Pro_Candidate::get_display_phone($candidate_id);
			$email = WP_Job_Board_Pro_Candidate::get_post_meta($candidate_id, 'email', true);
		}

		if ( !empty($email) ) {
			$userdata = get_userdata( $current_user_id );
			$email = $userdata->user_email;
		}
	}
?>


	<div class="contact-form">
		
	    <form method="post" action="?" class="contact-form-employer in-sidebar contact-form-wrapper">
	    <?php do_action('superio_after_contact_form', $post, $user_id); ?>
		
	</div>
	<?php echo trim($after_widget);
endif;

