import styles from "./Main.module.css";
import RealTimePopularWriting from "./RealTimePopularWriting/RealTimePopularWriting";
import TagCollection from "./TagCollection/TagCollection";
export default function Main({ children }: any) {
  return (
    <div className={styles.main_section}>
      <div className={styles.inner}>
        <div className={styles.section_box_left}>
          <div className={styles.section_box_left_middle}>{children}</div>
        </div>
        <div className={styles.section_box_right}>
          <div className={styles.section_box_right_top}>
            <RealTimePopularWriting />
          </div>
          <div className={styles.section_box_right_bottom}>
            <TagCollection />
          </div>
        </div>
      </div>
    </div>
  );
}
